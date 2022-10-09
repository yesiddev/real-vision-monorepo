import React from 'react'
import styles from './Input.module.css'

interface Props {
  value?: string
  name?: string
  type?: string
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  className?: string
  width?: string
  fontSize?: string
  fontWeight?: string
}

const Textarea = ({value, onChange}: Props) => {
  return (
    <div className={styles.input}>
      <textarea value={value} onChange={onChange} className={styles.input_element} name="" id="" cols={30} rows={10}></textarea>
    </div>
  )
}

export default Textarea
