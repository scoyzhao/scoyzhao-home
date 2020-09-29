/*
 * 博客整体架构页面，顶部，底部以及作者介绍
 * @Author: scoyzhao
 * @Date: 2020-09-29 17:00:13
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-29 17:05:05
 */

import { Row, Col } from 'antd'

import Header from 'components/Header'
import Author from 'components/Author'
import Footer from 'components/Footer'
import styles from './index.module.css'

const Architecture = ({ content }) => {
  return (
    <>
      <Header />
      <Row className={styles.comm_main} type='flex' justify='center'>
        <Col className={styles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}>
          { content }
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Architecture
