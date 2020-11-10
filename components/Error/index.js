/*
 * @Author: scoyzhao
 * @Date: 2020-11-12 21:13:47
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-12 21:23:17
 */

import styles from './index.module.css'

const Error = ({ message }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        嘤嘤嘤，出错惹 - -!
      </div>
      <div className={styles.message}>
        {message}
      </div>
    </div>
  )
}

export default Error
