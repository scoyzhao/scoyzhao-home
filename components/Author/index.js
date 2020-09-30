/*
 * 我的介绍组件
 * @Author: scoyzhao
 * @Date: 2020-09-29 16:13:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-30 10:27:42
 */
import { Avatar, Card } from 'antd'
import Link from 'next/link'

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
        <Link href='/archive'>归档</Link>,
        <Link href='/list'>分类</Link>,
        <Link href='/tags'>标签</Link>,
        <Link href='/about'>关于</Link>,
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
