import React, { MouseEventHandler } from 'react'
import styles from './Button.module.css'

interface Props {
    children: React.ReactNode
    className?: string
    onClick?: MouseEventHandler
}

const Button = ({className, children, onClick}: Props) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[`${className}`]} `} >{children}</button>
  )
}

export default Button
