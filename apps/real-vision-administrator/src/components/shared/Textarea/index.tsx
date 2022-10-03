import React from 'react'
import styles from './Input.module.css'
const Textarea = () => {
  return (
    <div className={styles.input}>
      <textarea className={styles.input_element} name="" id="" cols={30} rows={10}></textarea>
    </div>
  )
}

export default Textarea
