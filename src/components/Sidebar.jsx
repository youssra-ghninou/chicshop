'use client'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import MobileMenu from './MobileMenu'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div className='lg:hidden'>
      {showSidebar ? (
        <button
          className='fixed left-0 top-0 z-50 flex cursor-pointer items-center text-3xl text-Adark'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AiOutlineClose />
        </button>
      ) : (
        <button
          className='fixed left-0 top-0 z-50 flex cursor-pointer items-center text-3xl text-Adark'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <AiOutlineMenu />
        </button>
      )}
      <div
        className={`transition-left fixed top-0 -left-full z-40 h-full w-full bg-Agray-200 text-Adark duration-200 ease-in-out dark:bg-Adark dark:text-Awhite ${
          !showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <MobileMenu />
      </div>
    </div>
  )
}

export default Sidebar
