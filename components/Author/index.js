/*
 * 我的介绍组件
 * @Author: scoyzhao
 * @Date: 2020-09-29 16:13:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:41:37
 */

import { Avatar, Card } from 'antd'
import { gotoAboutPage } from '@/util'

const { Meta } = Card

const Author = ({ isShowAuthorPic }) => {
  return (
    <Card
      cover={
        isShowAuthorPic && <img src='https://raw.githubusercontent.com/scoyzhao/FigureBed/master/blog/index_pic.jpg' />
      }
    >
      <Meta
        avatar={<Avatar src='https://raw.githubusercontent.com/scoyzhao/FigureBed/master/blog/admin/avatar.png' />}
        title='一枚前端er'
        description={
          <span
            className='pointer'
            onClick={() => gotoAboutPage()}
          >
            关于 scoyzhao~
          </span>
        }
      />
    </Card>
  )
}

export default Author
