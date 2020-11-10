/*
 * 博客的公共Header
 * @Author: scoyzhao
 * @Date: 2020-09-29 11:38:00
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:39:43
 */
import React from 'react'
import { Row, Col, Menu, Dropdown } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import Link from 'next/link'
import styles from './index.module.css'

const { Item } = Menu;

const menu = (
  <Menu style={{ width: '100px', textAlign: 'center' }}>
    <Item>
      <Link href='/list'>归档</Link>
    </Item>
    <Item>
      <Link href='/about'>关于</Link>
    </Item>
  </Menu>
);

const Header = () => (
  <div className={styles.header}>
    <Row type='flex' justify='space-between'>
      <Col offset={2} xs={12} sm={12} md={12} lg={12} xl={12}>
        <Link href='/'>
          <span className={styles.header_logo}>Scoyzhao</span>
        </Link>
        <span className={styles.header_txt}>分享热爱，love and share</span>
      </Col>

      <Col xs={2} sm={2} md={0} lg={0} xl={0}>
        <Dropdown overlay={menu} placement='bottomCenter'>
          <MenuOutlined style={{ marginTop: '20px', fontSize: '18px' }} />
        </Dropdown>
      </Col>
    </Row>
  </div>
)

export default Header