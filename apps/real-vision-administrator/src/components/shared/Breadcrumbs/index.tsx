import React, { Fragment } from 'react'
import styles from './Breadcrumbs.module.css'

interface Props {
    items: any[]
}

const Breadcrumbs = ({items}: Props) => {
  return (
    <div className={styles.container}>
      {items.map((item:any, index:number) => (
        <Fragment key={item}>
            {index !== 0 && <span className={styles.divider}>/</span>}
            {item}
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs
