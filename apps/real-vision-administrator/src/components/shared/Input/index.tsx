import React from 'react'
import styles from './Input.module.css'

interface Props {
  value?: string
  className?: string
  fontSize?: string
  fontWeight?: string
}

const Input = ({value, className, fontSize, fontWeight}: Props) => {
  return (
    <div className={styles.input}>
      <input style={{fontSize: fontSize, fontWeight: fontWeight }} className={`${styles.input_element} ${className == 'none' && styles.input_none}`} type="text" value={value} />
    </div>
  )
}

export default Input
