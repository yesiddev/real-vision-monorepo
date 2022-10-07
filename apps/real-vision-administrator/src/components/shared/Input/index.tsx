import React from 'react'
import styles from './Input.module.css'

interface Props {
  value?: string
  name?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
  width?: string
  fontSize?: string
  fontWeight?: string
}

const Input = ({value, type="text", name="", className, onChange, width, fontSize, fontWeight}: Props) => {
  return (
    <div className={styles.input}>
      <input name={name} type={type} onChange={onChange} style={{fontSize: fontSize, fontWeight: fontWeight, width: width }} className={`${styles.input_element} ${className == 'none' && styles.input_none}`} value={value} />
    </div>
  )
}

export default Input
