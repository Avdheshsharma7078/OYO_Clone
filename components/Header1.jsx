import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Block from './Block'
const Header1 = () => {
  return (
    <div className='flex justify-between h-24 px-10 py-7 border-b-2 border-gray-500'>
    <Image src={"/logo.png"} alt='logo' width={200} height={100} className='w-28 h-10'/>
    <div className="border-r-2 border-gray-300 h-full flex">

      <Block title={'Become a member'} para={'Additional 10% off on stays'}/>
      <Block title={'OYO for business'} para={'Trusted by 5000 corporates.'}/>
      <Block title={'List your Property'} para={'Start earning in 30 min.'}/>
      <Block title={'987654321'} para={'Call us to book now.'}/>
      <div className="flex items-center px-3">
      <Image src={"/signup.svg"} alt='logo' width={200} height={100} className='w-28 h-10'/>
      
     <Link href={"/login"}>
     <h3 className='font-bold'>Login / Signup</h3>
     </Link>
      </div>
    </div>
    </div>
  )
}

export default Header1