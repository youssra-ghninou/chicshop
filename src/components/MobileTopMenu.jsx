import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import DesktopSearchBar from './DesktopSearchBar'
import MobileSearchBar from './MobileSearchBar'
import Sidebar from './MobileSidebar'

const MobleTopMenu = () => {
  return (
    <main className='p-2'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Sidebar />
          <Link href='/' className='rounded-md bg-Alogo p-2 text-Awhite'>
            <BsBag />
          </Link>
          <h1 className='text-lg font-extrabold text-Abrand'>Chic Shop</h1>
        </div>
        <div className='hidden w-4/6 md:block'>
          <DesktopSearchBar />
        </div>
        <div className='flex gap-4'>
          <div className='text-2xl'>
            <AiOutlineShoppingCart />
          </div>
          <div className='text-2xl'>
            <CgProfile />
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
