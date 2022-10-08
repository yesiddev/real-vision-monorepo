import React from 'react' 
import './Header.component.css'

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__content-container'>
        <figure className='Header__img-container'>
          <img src="/logo.webp" alt="company logo" className='Header__image' />
        </figure>
        <p className='Header__title'>
          Real Vision Software
        </p>
      </div>
    </header>
  )
}

export default Header