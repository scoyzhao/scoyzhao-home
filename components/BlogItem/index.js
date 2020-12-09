/*
 * 博客列表组件
 * @Author: scoyzhao
 * @Date: 2020-11-30 21:02:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-09 10:23:22
 */

import React from 'react'
import { Row, Col, Tag } from 'antd'
import { formatDate, gotoTypePage, gotoTagPage, gotoDetailPage } from '@/util'

import styles from './index.module.css'

const Index = ({ blog }) => {
  const { id, created_time: createdTime, type, tags, title } = blog

  const buildTags = () => {
    return tags.map(tag => {
      const { name, id } = tag
      return (
        <Tag
          key={id}
          className='pointer'
          onClick={() => gotoTagPage(id)}
          color='geekblue'
        >
          {name}
        </Tag>
      )
    })
  }

  return (
    <Row
      className={styles.list}
      key={blog.id}
      gutter={[16, 8]}
    >
      <Col span={3} className={styles.list_time}>
        {formatDate(createdTime)}
      </Col>
      <Col span={16}>
        <span
          className='pointer'
          onClick={() => gotoDetailPage(id)}
        >
          {title}&nbsp;&nbsp;
        </span>
        {buildTags()}
      </Col>
      <Col span={5}>
        分类:&nbsp;
        <span
          className='pointer'
          onClick={() => gotoTypePage(type.id)}
        >
          {type.name}
        </span>
      </Col>
    </Row>
  )
}

export default Index
