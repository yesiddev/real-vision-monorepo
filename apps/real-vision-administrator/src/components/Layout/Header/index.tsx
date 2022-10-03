import { Admin } from '@rv/types/dist/models'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  
    const admin: Admin = {
        name: 'Nestor Mosquera',
        title: 'CEO',
        position: 'CEO',
        age: 25
    }

    return (
    <header className={styles.header}>
        <div className={styles.left_items}>

    <div className={styles.logo}>
        <img src="/logo.webp" alt="" />
    </div>
      <nav className={styles.nav}>
        <Link to="/">Main</Link>
        <Link to='kanban'>Enterprise</Link>
        <span>
          Hardware
          <div className={styles.dropdown_menu}>
            <Link to="/">Blog</Link>
            <Link to="/">Brands</Link>
            <Link to="/">Categories</Link>
            <Link to="/">Games</Link>
            <Link to="/">Programs</Link>
            <Link to="/">Products</Link>
            <Link to="/">Computers</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Quote</Link>
            <Link to="/">Quotation</Link>
          </div>
        </span>
        <a>Software</a>
        <a>Marketing</a>
        <span>
        Management
          <div className={styles.dropdown_menu}>
            <Link to="/">Employes</Link>
          </div>
        </span>
        <a>Helebba</a>
      </nav>
      </div>

      <div className={styles.user}>
        <div className={styles.user_profile}>
        <span>{admin.name.charAt(0)}</span>
        </div>
        <div>
          <h3>{admin.name}</h3>
          <p>{admin.position}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
