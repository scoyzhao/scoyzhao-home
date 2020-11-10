/*
 * 归档页面
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:32:17
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:45:58
 */
import React from 'react'
import { withRouter } from 'next/router'
import Error from '@/components/Error'
import { getBlogList, getTypeList, getTagList } from '@/service/request'
import Architecture from '@/components/Architecture'
import BlogItem from '@/components/BlogItem'

import styles from './index.module.css'

const Index = ({ typeList, blogList, tagList, msg, error }) => {
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
      title='归档'
      typeList={typeList}
      tagList={tagList}
      content={
        <>
          <div className={styles.recent_title}>最近 {blogList.length} 篇</div>
          {
            buildContent()
          }
        </>
      }
    >
    </Architecture>
  )
}

export const getStaticProps = async () => {
  try {
    const [typeListRes, tagListRes, blogListRes] = await Promise.all([getTypeList(), getTagList(), getBlogList({ limit: 20 })])

    if (
      typeListRes.code !== 0 ||
      blogListRes.code !== 0 ||
      tagListRes.code !== 0
    ) {
      return {
        props: {
          error: true,
          msg: '获取数据失败',
        }
      }
    }

    const { blogList } = blogListRes.data
    const { typeList } = typeListRes.data
    const { tagList } = tagListRes.data

    return {
      props: {
        error: false,
        tagList,
        blogList,
        typeList,
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
