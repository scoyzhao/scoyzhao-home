/*
 * 归档页面
 * @Author: scoyzhao
 * @Date: 2020-09-29 15:32:17
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-09-30 10:28:19
 */
import React from 'react'
import { withRouter } from 'next/router'
import Architecture from 'components/Architecture'

const Archive = () => (
  <Architecture
    title='归档'
    content={
      <>
        Archive page
      </>
    }
  >
  </Architecture>
)

export default withRouter(Archive)
