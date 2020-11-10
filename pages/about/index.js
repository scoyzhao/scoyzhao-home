/*
 * 关于页面
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:31:07
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:44:21
 */
import React from 'react'
import Architecture from '@/components/Architecture'
import styles from './index.module.css'

const About = () => (
  <Architecture
    title='关于我'
    content={
      <div className={styles.wrap}>
        <div className={styles.content}>ta很懒，暂时没有自我介绍~</div>
      </div>
    }
  >
  </Architecture>
)

export default About
