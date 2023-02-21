'use client'

import Link from 'next/link'
import { BsBag, BsFillPersonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { RiMessage2Fill } from 'react-icons/ri'
import DesktopSearchBar from './DesktopSearchBar'
import MobileSearchBar from './MobileSearchBar'
import Sidebar from './MobileSidebar'

const MobleTopMenu = () => {
  return (
    <main className='flex flex-col p-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Sidebar />
          <Link href='/category' className='flex items-center gap-2'>
            <span className='rounded-md bg-Alogo p-2 text-Awhite'>
              <BsBag />
            </span>
            <h1 className='text-lg font-extrabold text-Abrand'>Chic Shop</h1>
          </Link>
        </div>
        <div className='hidden md:block md:w-3/6'>
          <DesktopSearchBar />
        </div>
        <div className='flex gap-4 text-Agray-500'>
          <div className='flex flex-col items-center'>
            <div className='text-3xl'>
              <BsFillPersonFill />
            </div>
            <p className='text-lg'>Profile</p>
          </div>
          <div className='hidden flex-col items-center lg:flex'>
            <div className='text-3xl'>
              <RiMessage2Fill />
            </div>
            <p className='text-lg'>Message</p>
          </div>
          <div className='hidden flex-col items-center lg:flex'>
            <div className='text-3xl'>
              <MdFavorite />
            </div>
            <p className='text-lg'>Orders</p>
          </div>
          <div className='flex flex-col items-center text-2xl'>
            <div className='text-3xl'>
              <FaShoppingCart />
            </div>
            <p className='text-lg'>My cart</p>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <MobileSearchBar />
      </div>
    </main>
  )
}

export default MobleTopMenu
