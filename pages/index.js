/*
 * 博客首页
 * @Author: scoyzhao
 * @Date: 2020-09-29 11:18:06
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-09 10:30:29
 */

import React from 'react'
import { List, Tag } from 'antd'
import Router from 'next/router'
import Error from '@/components/Error'
import API from '@/service/api'
import { formatDate, gotoDetailPage, gotoTypePage } from '@/util'

import Architecture from '@/components/Architecture'
import BlogItem from '@/components/BlogItem'
import styles from './index.module.css'

const { Item } = List;

const Home = ({ error, data, msg }) => {
  if (error) {
    return <Error message={msg} />
  }
  const { topBlogList, recentBlogList } = data

  const buildTopBlogList = () => {
    return (
      <List
        itemLayout='vertical'
        dataSource={topBlogList}
        renderItem={blog => (
          <Item key={blog.id}>
            <div
              className={styles.top_title}
              onClick={() => gotoDetailPage(blog.id)}
            >
              {blog.title}
            </div>
            <div className={styles.top_type}>
              <span><Tag color='geekblue'>置顶</Tag></span>
              <span>{formatDate(blog.created_time)}</span>
              <span
                className='pointer'
                onClick={() => gotoTypePage(blog.type.id)}
              >
                分类：{blog.type.name}
              </span>
            </div>
            <div className={styles.top_abstract}>{blog.abstract}</div>
            <div
              className={styles.top_detail}
              onClick={() => gotoDetailPage(blog.id)}
            >
              --查看全文--
            </div>
          </Item>
        )}
      />
    )
  }

  const buildRecentBlogList = () => {
    return (
      <>
        <div className={styles.title}>最近</div>
        {
          recentBlogList.map(blog => (
            <BlogItem key={blog.id} blog={blog} />
          ))
        }
        <div
          className={styles.more}
          onClick={gotoListPage}
        >
          查看更多......
        </div>
      </>
    )
  }

  const buildContent = () => {
    return (
      <>
        {
          buildTopBlogList()
        }
        {
          buildRecentBlogList()
        }
      </>
    )
  }

  const gotoListPage = () => {
    Router.push('/list')
  }


  return (
    <Architecture
      isShowAuthorPic
      content={
        buildContent()
      }
    />
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch(API.GET_BLOG_LIST_WITH_TOP, { method: 'POST' })
    const json = await res.json()
    const { code, data, msg } = json

    if (code !== 0) {
      return {
        props: {
          error: true,
          msg,
        }
      }
    }

    return {
      props: {
        error: false,
        data,
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

export default Home
