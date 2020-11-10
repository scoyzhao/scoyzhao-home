/*
 * 类型侧边栏
 * @Author: scoyzhao
 * @Date: 2020-09-29 11:18:06
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 12:03:33
 */

import React from 'react'
import { Card } from 'antd'
import { gotoTypePage } from '@/util'
import styles from './index.module.css'

const Index = ({ typeList }) => {
  return (
    <Card
      className={styles.wrap}
      size='small'
      title='分类'
    >
      {
        typeList.map(type => {
          const { id, name } = type;
          return (
            <div
              className={styles.type_name}
              key={id}
              onClick={() => gotoTypePage(id)}
            >
              <span className='pointer'>
                {name}
              </span>
            </div>
          )
        })
      }
    </Card>
  )
}

export default Index
