/*
 * @Author: scoyzhao
 * @Date: 2020-11-10 20:26:31
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-08 11:20:55
 */

const BASE_URL = 'http://120.27.247.30:7001/home'
// const BASE_URL = 'http://192.168.208.82:7001/home'

const API = {
  GET_TAG_LIST: BASE_URL + '/tag/getTagList',
  GET_TYPE_LIST: BASE_URL + '/type/getTypeList',
  GET_BLOG_LIST_WITH_TOP: BASE_URL + '/blog/getBlogListWithTop',
  GET_BLOG_LIST: BASE_URL + '/blog/getBlogList',
  GET_BLOG_DETAIL_BY_ID: BASE_URL + '/blog/getBlogDetailById'
}

export default API
