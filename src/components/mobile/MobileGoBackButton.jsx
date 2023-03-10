'use client'
import { useRouter } from 'next/navigation'
import { BiArrowBack } from 'react-icons/bi'
import { Button } from '../Button'

const MobileGoBackButton = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col gap-2'>
      <Button onClick={() => router.back()}>
        <BiArrowBack className='text-xl' />
        Default
      </Button>
      <Button intent='secondary' onClick={() => router.back()}>
        <BiArrowBack className='text-xl' /> Secondary button
      </Button>
      <Button intent='primary' onClick={() => router.back()}>
        <BiArrowBack className='text-xl' /> Primary button
      </Button>
      <Button intent='secondary' href='/secondary'>
        <BiArrowBack className='text-xl' /> Secondary button
      </Button>
      <Button intent='primary' href='/primary'>
        <BiArrowBack className='text-xl' /> Primry button
      </Button>
      <Button intent='danger' href='/primary'>
        <BiArrowBack className='text-xl' /> Danger button
      </Button>
      <Button intent='success' href='/primary'>
        <BiArrowBack className='text-xl' /> success button
      </Button>
    </div>
  )
}

export default MobileGoBackButton
