import { Admin } from '@rv/types'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  
  
    // const admin: Admin = {
    //     name: 'Nestor',
    //     middlename: "Estiwar",
    //     lastname: "Mosquera",
    //     middlelastname: "Mosquera",
    //     position: 'CEO',
    //     age: 25
    // }

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
            <Link to="/hardware-blog">Blog</Link>
            <Link to="/brands">Brands</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/games">Games</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/products">Products</Link>
            <Link to="/computers">Computers</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/quote">Quote</Link>
            <Link to="/quotation">Quotation</Link>
          </div>
        </span>
        <span>
        Software
          <div className={styles.dropdown_menu}>
            <Link to="/create-post-software">Create post</Link>
            <Link to="/status">Status</Link>
          </div>
        </span>
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
          <span>N</span>
        {/* <span>{admin.name.charAt(0)}</span> */}
        </div>
        <div>
          <h3>Nestor Mosquera</h3>
          <p>CEO</p>
          {/* <h3>{admin.name}</h3> */}
          {/* <p>{admin.position}</p> */}
        </div>
      </div>
    </header>
  )
}

export default Header
