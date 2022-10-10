import React, { useState } from 'react'
import styles from './Select.module.css'

type Option = {
  name: string,
  value: string
}

interface Props {
  options?: Option[]; 
  value?: string
  onChange?: any;
}

const Select = ({options, value, onChange}:Props) => {

  return (
    <div className={styles.select}>
      <select name="" id="" value={value} onChange={(e) => onChange(e.target.value)} className={styles.select_element} >
        {options?.map((option: Option) => (
          <option key={value} value={JSON.stringify(option)}>{option?.name}</option>
        ))} 
      </select>
    </div>
  )
}

export default Select
