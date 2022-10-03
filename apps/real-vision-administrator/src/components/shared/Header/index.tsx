import React from 'react'
import styles from './Header.module.css'
interface Props {
  title: string;
  children: React.ReactNode
}

const HeaderScreen = ({title, children}: Props) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default HeaderScreen
