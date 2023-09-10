import React from 'react'
import logo from '../img/logosfirebase.svg'

export const Navbar = () => {
  return (
    <nav className='h-[60px] bg-white rounded-lg  m-4 p-4 ' >
      <div className='flex justify-center gap-5' >
        <img src={logo} alt='Logo' />
        <h1 className='text-2xl  hover:text-slate-700 font-medium '>Firebase Contact Add</h1>
      </div>
    </nav>
  )
}
