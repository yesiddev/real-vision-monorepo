import React from 'react'
import styles from './Field.module.css'

interface Props {
    label?: string;
    name?: string;
    tip?: string;
    children: React.ReactNode
}

const Field = ({label, name, tip, children}: Props) => {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      {children}
      {tip && <div className={styles.tip}>{tip}</div> }
    </div>
  )
}

export default Field
