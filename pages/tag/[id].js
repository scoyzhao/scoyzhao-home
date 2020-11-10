/*
 * 标签页
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:27:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:27:14
 */
import React from 'react'
import { withRouter } from 'next/router'
import { getBlogList, getTagList } from '@/service/request'
import Architecture from '@/components/Architecture'
import BlogItem from '@/components/BlogItem'

import styles from './index.module.css'

const Index = ({ error, msg, tagList, blogList, tagName }) => {
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
      title='标签'
      tagList={tagList}
      content={
        <div className={styles.wrap}>
          <div className={styles.title}>标签<span className={styles.title_type}>{tagName}</span> </div>
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
  const { code, data } = await getTagList()
  const paths = []
  if (code === 0) {
    const { tagList } = data
    tagList.map(tag => paths.push({
      params: { id: tag.id.toString() }
    }))
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  try {
    const { id } = params
    const [tagListRes, blogListRes] = await Promise.all([getTagList(), getBlogList({ type: 'tag', id })])

    if (tagListRes.code !== 0 || blogListRes.code !== 0) {
      return {
        props: {
          error: true,
          msg: '获取数据失败',
        }
      }
    }

    const { tagList } = tagListRes.data
    const { blogList } = blogListRes.data
    let tagName = 'unknown'
    for (let i = 0; i < tagList.length; i++) {
      if (tagList[i].id.toString() === id) {
        tagName = tagList[i].name
        break
      }
    }

    return {
      props: {
        error: false,
        tagList,
        blogList,
        tagName,
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
