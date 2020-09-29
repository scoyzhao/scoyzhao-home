/*
 * 我的介绍组件
 * @Author: scoyzhao
 * @Date: 2020-09-29 16:13:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-29 16:42:03
 */
import { Avatar, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'

import styles from './index.module.css'

const { Meta } = Card

const Author = () => {

  return (
    <Card
      className={styles.author}
      cover={
        <img src='http://img.wxcha.com/file/201811/01/e7acbcc1fd.jpg' />
      }
      actions={[
        <div>归档</div>,
        <div>分类</div>,
        <div>标签</div>,
        <div>关于</div>,
      ]}
    >
      <Meta
        avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        title='scoyzhao'
        description='前端er~'
      />
    </Card>
  )
}

export default Author