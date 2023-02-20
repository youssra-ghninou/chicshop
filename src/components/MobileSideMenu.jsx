/* eslint-disable no-unused-vars */
'use client'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai'
import { BiBuildings } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'
import { MdOutlineCategory } from 'react-icons/md'
import { RxAvatar } from 'react-icons/rx'
import { TbWorld } from 'react-icons/tb'
import { uid } from 'uid'
import ThemeSwitch from './ThemeChangerButton'

const MobileSideMenu = () => {
  const navitems = [
    {
      name: 'Home',
      link: '/',
      icon: <AiOutlineHome />,
    },
    {
      name: 'Categories',
      link: '/category',
      icon: <MdOutlineCategory />,
    },
    {
      name: 'Favorites',
      link: '/category',
      icon: <AiOutlineHome />,
    },
    {
      name: 'My orders',
      link: '/category',
      icon: <AiOutlineShopping />,
    },
    {
      name: 'English | USD',
      link: '/category',
      icon: <TbWorld />,
    },
    {
      name: 'Contact us',
      link: '/category',
      icon: <BsHeadset />,
    },
    {
      name: 'About',
      link: '/category',
      icon: <BiBuildings />,
    },
    {
      name: 'User agreement',
      link: '/category',
      icon: '',
    },
    {
      name: 'Partnership',
      link: '/category',
      icon: '',
    },
    {
      name: 'Privacy policy',
      link: '/category',
      icon: '',
    },
  ]
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-200 py-6 px-2 text-Adark dark:text-Adark'>
        <RxAvatar className='rounded-full bg-Agray-500 text-6xl text-Awhite' />
        <div className='flex gap-2 divide-Adark'>
          <button>Sign in</button>
          <button> Sign UP</button>
        </div>
      </div>
      <div className='flex h-full flex-col gap-5 bg-Awhite py-4 px-2 dark:bg-Adark dark:text-Awhite'>
        {navitems.map(({ name, link, icon }) => {
          return (
            <Link key={uid()} href={link}>
              <div className='flex items-center gap-2'>
                <IconContext.Provider
                  value={{ className: 'text-4xl text-Agray-500' }}
                >
                  {icon}
                </IconContext.Provider>
                {name}
              </div>
            </Link>
          )
        })}
        <ThemeSwitch />
      </div>
    </>
  )
}

export default MobileSideMenu
