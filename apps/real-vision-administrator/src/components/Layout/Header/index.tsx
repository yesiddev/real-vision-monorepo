import { PrivateRoutes, PublicRoutes } from '@/constants-definitions/Routes'
import { logout, reset } from '@/redux/states/admins/user'
import { Admin } from '@rv/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {

    const {user} = useSelector((state: any) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Logout = () => {
      dispatch(logout() as any)
      dispatch(reset())
      navigate('/')
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
            <Link to={PrivateRoutes.CREATESOFTWAREPOSTS}>Create post</Link>
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
          <span>{user.name.charAt(0)}</span>
        </div>
        <div>
          <h3>{user.name} {user.lastname}</h3>
          <p>{user.position}</p>
        </div>
        <div className={styles.dropdown_menu_user}>
            <button onClick={Logout}>Logout</button>
          </div>
      </div>

    </header>
  )
}

export default Header
