import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full border shadow-md py-1 fixed top-0 bg-white'>
      <NavLink to="/">
      <header className='text-center'>
        <h1 className='text-3xl font-bold uppercase'>My Blogs</h1>
      </header>
      </NavLink>
    </div>
  )
}

export default Header