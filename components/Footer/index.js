/*
 * 博客底部组件
 * @Author: scoyzhao
 * @Date: 2020-09-29 16:53:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-30 11:36:38
 */

import styles from './index.module.css'

const Footer = () => (
  <div className={styles.footer}>
    <div>
      系统由 React+Node+Ant Desgin驱动&nbsp;&nbsp;
      <img src="https://travis-ci.org/scoyzhao/scoyzhao-home.svg?branch=master" alt="" srcset=""/>
    </div>
    <div>scoyzhao 2020</div>
  </div>
)

export default Footer
