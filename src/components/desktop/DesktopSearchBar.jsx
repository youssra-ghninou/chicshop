'use client'

import { BsArrowDownShort } from 'react-icons/bs'

const DesktopSearchBar = () => {
  return (
    <form className='flex w-full justify-center'>
      <input
        type='search'
        className='z-20 w-full rounded-l-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-600  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500'
        placeholder='Search'
        required
      />
      <button
        className='flex items-center gap-2 border-y-2 border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700'
        type='button'
      >
        <p>Categories</p>
        <span className='text-lg'>
          <BsArrowDownShort />
        </span>
      </button>
      <button
        type='submit'
        className='rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Search
        <span className='sr-only'>Search</span>
      </button>
    </form>
  )
}

export default DesktopSearchBar
