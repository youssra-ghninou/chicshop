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
    <>
      {navitems.map(({ id, name, link }) => {
        return (
          <Link key={id} className='text-xl font-bold text-Ared' href={link}>
            {name}
          </Link>
        )
      })}
    </>
  )
}

export default Menu
