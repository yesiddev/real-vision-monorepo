import React from 'react'
import styles from './Input.module.css'
const Input = () => {
  return (
    <div className={styles.input}>
      <input className={styles.input_element} type="text" />
    </div>
  )
}

export default Input
