'use client'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'

const GoBack = () => {
  const router = useRouter()
  return (
    <button
      className='flex items-center'
      type='button'
      onClick={() => router.back()}
    >
      <BiArrowBack className='text-xl' /> Go back
    </button>
  )
}

export default GoBack
