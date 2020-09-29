/*
 * 博客的公共Header
 * @Author: scoyzhao
 * @Date: 2020-09-29 11:38:00
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-29 15:05:25
 */

import React from 'react'
import { Row, Col, Menu, Dropdown } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styles from './header.module.css'

const { Item } = Menu;

const menu = (
  <Menu>
    <Item>
      <a>归档</a>
    </Item>
    <Item>
      <a>标签</a>
    </Item>
    <Item>
      <a>关于</a>
    </Item>
  </Menu>
);

const Header = () => (
  <div className={styles.header}>
    <Row type='flex' justify='space-between'>
      <Col offset={2} xs={12} sm={12} md={12} lg={12} xl={12}>
        <span className={styles.header_logo}>Scoyzhao</span>
        <span className={styles.header_txt}>分享热爱，love and share</span>
      </Col>

      <Col xs={2} sm={2} md={2} lg={0} xl={0}>
        <Dropdown overlay={menu} placement='bottomCenter'>
          <MenuOutlined style={{ marginTop: '15px', fontSize: '18px' }} />
        </Dropdown>
      </Col>
    </Row>
  </div>
)

export default Header