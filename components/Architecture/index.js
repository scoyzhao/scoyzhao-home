/*
 * 博客整体架构页面，顶部，底部以及作者介绍
 * @Author: scoyzhao
 * @Date: 2020-09-29 17:00:13
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-09 10:26:48
 */

import { Row, Col, BackTop } from 'antd'
import Head from 'next/head'

import Header from 'components/Header'
import Author from 'components/Author'
import TypeBar from 'components/TypeBar'
import TagBar from 'components/TagBar'
import Footer from 'components/Footer'
import styles from './index.module.css'

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  color: '#fff',
  textAlign: 'center',
  fontSize: 40,
};

const Architecture = ({
  title = 'scoyzhao-home',
  content = null,
  sidebar = null,
  isShowAuthorPic = false,
  typeList = undefined,
  tagList = undefined,
} = {},) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Row className={styles.comm_main} type='flex' justify='center'>
        <Col className={styles.comm_left} xs={24} sm={24} md={16} lg={18} xl={13}>
          {content}
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={3}>
          <Author isShowAuthorPic={isShowAuthorPic} />
          {typeList && <TypeBar typeList={typeList} />}
          {tagList && <TagBar tagList={tagList} />}
          {sidebar}
        </Col>
      </Row>
      <BackTop>
        <div style={style}>👆</div>
      </BackTop>
      <Footer />
    </>
  )
}

export default Architecture
