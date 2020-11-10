/*
 * @Author: scoyzhao
 * @Date: 2020-11-17 21:39:02
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-07 20:39:20
 */

import Router from 'next/router'

export function formatDate(date) {
  return date.slice(0, 11)
}

export function gotoTypePage(id) {
  Router.push(`/type/${id}`)
}


export function gotoTagPage(id) {
  Router.push(`/tag/${id}`)
}

export function gotoDetailPage(id) {
  Router.push(`/detail/${id}`)
}

export function gotoAboutPage() {
  Router.push('/about')
}
