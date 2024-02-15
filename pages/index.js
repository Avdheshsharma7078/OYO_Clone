import React from 'react'
import Header1 from '@/components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Header4 from '@/components/Header4'

import Image from 'next/image'
import Head from 'next/head'
import Footer from '@/components/Footer'


const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : India-s Best Online Hotel Booking For sanitized Stay.</title>
   
      </Head>
     
 <Header1/>
 <Header2/>
 <Header3/>

 <div>
<Image src={"/banner1.jpg"} alt='banner1' width={1300} height={2000} className='mt-14  w-full' />

<Image src={"/banner2.jpg"} alt='banner1' width={1200} height={3000} className=' w-full mt-14' />

</div>
<Header4/>
<Footer/>
 </div>
 

  )
}

export default Home