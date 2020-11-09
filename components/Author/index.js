/*
 * 我的介绍组件
 * @Author: scoyzhao
 * @Date: 2020-09-29 16:13:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-09 20:04:31
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
        <img src='https://raw.githubusercontent.com/scoyzhao/FigureBed/master/blog/index_pic.jpg' />
      }
      actions={[
        <Link href='/archive'>归档</Link>,
        <Link href='/list'>分类</Link>,
        <Link href='/tags'>标签</Link>,
        <Link href='/about'>关于</Link>,
      ]}
    >
      <Meta
        avatar={<Avatar src='https://raw.githubusercontent.com/scoyzhao/FigureBed/master/blog/admin/avatar.png' />}
        title='scoyzhao'
        description='前端er~'
      />
    </Card>
  )
}

export default Author
