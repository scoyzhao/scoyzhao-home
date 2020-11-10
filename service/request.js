/*
 * @Author: scoyzhao
 * @Date: 2020-12-05 15:02:42
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:46:16
 */

import API from './api'

export async function getTypeList() {
  const res = await fetch(API.GET_TYPE_LIST, { method: 'GET' })
  return await res.json()
}

export async function getTagList() {
  const res = await fetch(API.GET_TAG_LIST, { method: 'GET' })
  return await res.json()
}

export async function getBlogList({ limit, type, id } = {}) {
  const res = await fetch(API.GET_BLOG_LIST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      limit,
      type,
      id,
    }),
  })

  return await res.json()
}

export async function getBlogDetailById({ id }) {
  const res = await fetch(API.GET_BLOG_DETAIL_BY_ID, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id }),
  })

  return await res.json()
}
