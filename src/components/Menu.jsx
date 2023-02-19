'use client'
import Link from 'next/link'
const Menu = () => {
  const navitems = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'products',
      link: '/products',
    },
  ]
  return (
    <div className='flex justify-around bg-Awhite text-red-500 dark:bg-red-500 dark:text-Awhite'>
      {navitems.map(({ id, name, link }) => {
        return (
          <Link key={id} className='text-xl font-bold' href={link}>
            {name}
          </Link>
        )
      })}
    </div>
  )
}

export default Menu
