import React, { useState } from 'react'
import styles from './Select.module.css'

type Option = {
  title: string,
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
        {options?.map(({title, value}: any) => (
          <option key={value} value={value}>{title}</option>
        ))} 
      </select>
    </div>
  )
}

export default Select
