import Button from '@/components/shared/Button'
import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        <h2>Your team</h2>
        <p>Teams you've been added to</p>

        <Button className='primary'>Create a team</Button>
    </aside>
  )
}

export default Sidebar
