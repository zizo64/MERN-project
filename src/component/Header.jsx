import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header className='bg-slate-200 shadow-md '>
    <div className='flex items-center mx-auto justify-between max-w-6xl p-3'>
    <h1 className='font-bold tex-sm'>
        <span className='text-slate-600'>MERN</span>
        <span>project</span>
    </h1>
    <form className='p-3 bg-slate-100 rounded-lg'>
        <input placeholder='Search...' className='bg-transparent focus:outline-none'></input>
    </form>
    <ul className='flex gap-2'>
        <Link to="/">
        <li className='hidden sm:block'>Home </li>
        </Link>
        <Link to="/about">
        <li className='hidden sm:block'>About </li>
        </Link>
        <Link to="/sign-in">
        <li>SignIn</li>
        </Link>
            
    </ul>
    </div>
   </header>
  )
}

export default Header
