import React from 'react'
import styles from './Input.module.css'

interface Props {
  value?: string
  onChange?: (e:any) => void
  className?: string
  width?: string
  fontSize?: string
  fontWeight?: string
}

const Input = ({value, className, onChange, width, fontSize, fontWeight}: Props) => {
  return (
    <div className={styles.input}>
      <input onChange={onChange} style={{fontSize: fontSize, fontWeight: fontWeight, width: width }} className={`${styles.input_element} ${className == 'none' && styles.input_none}`} type="text" value={value} />
    </div>
  )
}

export default Input
