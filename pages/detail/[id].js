/*
 * 文章详情页
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:30:21
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:22:23
 */

import React from 'react'
import { Affix, Tag } from 'antd'
import { withRouter } from 'next/router'
import { DashboardOutlined, FolderOutlined, TagOutlined } from '@ant-design/icons'
import { getBlogDetailById, getBlogList } from '@/service/request'
import { gotoTagPage, gotoTypePage } from '@/util'

import ReactMarkdown from 'react-markdown/with-html'
import MarkNav from 'markdown-navbar'

import Architecture from '@/components/Architecture'
import styles from './index.module.css'

const Index = ({ error, msg, blog }) => {
  if (error) {
    return <Error message={msg} />
  }

  const {
    type: {
      name: typeName,
      id: typeId,
    },
    tags,
    content,
    created_time: createdTime,
    title,
  } = blog

  const aBlogTags = tags.map(tag => (
    <Tag
      className='pointer'
      key={tag.id}
      onClick={() => gotoTagPage(tag.id)}
      color='geekblue'
    >
      {tag.name}
    </Tag>
  ))

  return (
    <Architecture
      title='博客详情'
      content={
        <>
          <div className={styles.detailed_title}>
            {title}
          </div>

          <div className={styles.list_icon}>
            <span><DashboardOutlined /> {createdTime}</span>
            <span
              className='pointer'
              onClick={() => gotoTypePage(typeId)}
            >
              <FolderOutlined /> {typeName}
            </span>
            <span>
              <TagOutlined /> {aBlogTags}
            </span>
          </div>

          <div className={styles.detailed_content} >
            <ReactMarkdown
              source={content}
              escapeHtml={false}
            />
          </div>
        </>
      }
      sidebar={
        <Affix offsetTop={3}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar_title}>文章目录</div>
            <MarkNav
              className={styles.article_menu}
              source={content}
              ordered={false}
            />
          </div>
        </Affix>
      }
    />
  )
}

export async function getStaticPaths() {
  const { code, data } = await getBlogList()
  const paths = []
  if (code === 0) {
    const { blogList } = data
    blogList.map(blog => paths.push({
      params: { id: blog.id.toString() }
    }))
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  try {
    const { id } = params
    const { code, data, msg } = await getBlogDetailById({ id })

    if (code !== 0) {
      return {
        props: {
          error: true,
          msg,
        }
      }
    }

    const { blog } = data

    return {
      props: {
        error: false,
        blog,
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