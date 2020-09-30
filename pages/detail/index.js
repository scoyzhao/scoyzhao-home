/*
 * 文章详情页
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:30:21
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-30 11:10:01
 */

import React from 'react'
import { Breadcrumb, Affix } from 'antd'
import { DashboardOutlined, FolderOutlined } from '@ant-design/icons'
import Link from 'next/link'

import ReactMarkdown from 'react-markdown/with-html'
import MarkNav from 'markdown-navbar'

import Architecture from '@/components/Architecture'
import styles from './index.module.css'


const { Item } = Breadcrumb

const markdown = '# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n' +
  '\`console.log(111)\` \n\n' +
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n' +
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n' +
  '``` var a=11; ```'

const List = () => {
  return (
    <Architecture
      title='文章详情页'
      content={
        <div>
          <div className={styles.bread_div}>
            <Breadcrumb>
              <Item>
                <Link href="/">首页</Link>
              </Item>
              <Item>视频列表</Item>
              <Item>xxxx</Item>
            </Breadcrumb>
          </div>

          <div className={styles.detailed}>
            <div className={styles.detailed_title}>
              React实战视频教程-技术胖Blog开发(更新08集)
          </div>

            <div className={styles.list_icon}>
              <span><DashboardOutlined /> 2019-06-28</span>
              <span><FolderOutlined /> 视频教程</span>
            </div>

            <div className={styles.detailed_content} >
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
      }
      sidebar={
        <Affix offsetTop={3}>
          <div className={styles.sidebar}>
            <div className={styles.sidebar_title}>文章目录</div>
            <MarkNav
              className={styles.article_menu}
              source={markdown}
              ordered={false}
            />
          </div>
        </Affix>
      }
    />
  )
}

export default List