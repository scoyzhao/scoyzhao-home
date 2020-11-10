/*
 * 标签侧边栏
 * @Author: scoyzhao
 * @Date: 2020-09-29 11:18:06
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 11:45:49
 */

import React from 'react'
import { Card, Tag } from 'antd'
import { gotoTagPage } from '@/util'
import styles from './index.module.css'

const Index = ({ tagList }) => {
  return (
    <Card
      className={styles.wrap}
      size='small'
      title='标签'
    >
      {
        tagList.map(tag => {
          const { id, name } = tag;
          return (
            <div
              className={styles.type_name}
              key={id}
              onClick={() => gotoTagPage(id)}
            >
              <Tag
                className='pointer'
                color='geekblue'
              >
                {name}
              </Tag>
            </div>
          )
        })
      }
    </Card>
  )
}

export default Index
