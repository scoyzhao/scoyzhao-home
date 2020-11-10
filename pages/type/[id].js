/*
 * 类型页面
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:27:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:30:38
 */
import React from 'react'
import { withRouter } from 'next/router'
import { getTypeList, getBlogList } from '@/service/request'
import Architecture from '@/components/Architecture'
import BlogItem from '@/components/BlogItem'

import styles from './index.module.css'

const Index = ({ error, msg, typeList, blogList, typeName }) => {
  if (error) {
    return <Error message={msg} />
  }

  const buildContent = () => {
    return blogList.map(blog => (
      <BlogItem key={blog.id} blog={blog} />
    ))
  }

  return (
    <Architecture
      title='类型'
      typeList={typeList}
      content={
        <div className={styles.wrap}>
          <div className={styles.title}>分类<span className={styles.title_type}>{typeName}</span> </div>
          {
            buildContent()
          }
        </div>
      }
    >
    </Architecture>
  )
}

export async function getStaticPaths() {
  const { code, data } = await getTypeList()
  const paths = []
  if (code === 0) {
    const { typeList } = data
    typeList.map(type => paths.push({
      params: { id: type.id.toString() }
    }))
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  try {
    const { id } = params
    const [typeListRes, blogListRes] = await Promise.all([getTypeList(), getBlogList({ type: 'type', id })])

    if (typeListRes.code !== 0 || blogListRes.code !== 0) {
      return {
        props: {
          error: true,
          msg: '获取数据失败',
        }
      }
    }

    const { typeList } = typeListRes.data
    const { blogList } = blogListRes.data
    let typeName = 'unknown'
    for (let i = 0; i < typeList.length; i++) {
      if (typeList[i].id.toString() === id) {
        typeName = typeList[i].name
        break
      }
    }

    return {
      props: {
        error: false,
        typeList,
        blogList,
        typeName,
      }
    }
  } catch (error) {
    return {
      props: {
        error: true,
        msg: error.toString(),
      }
    }
  }
}

export default withRouter(Index)
