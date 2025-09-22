'use client'
import React from 'react'
import Link from 'next/link'

const Join = () => {
  return (
    <section className='overflow-hidden bg-joinus'>
      <div className='container mx-auto max-w-7xl px-4'>
        <div className='text-center'>
          {/* <p className='text-primary text-lg font-normal tracking-widest uppercase'>
            Join us
          </p> */}
          <h2 className='my-6'>Ready to Boost ROI ?</h2>
          <p className='text-black/50 text-base font-normal max-w-3xl mx-auto'>
            Book a call with us today to map your next profitable digital scaling moves. 
          </p>
        </div>

        <div className='mx-auto max-w-4xl pt-5'>
          <div className='sm:mr-3 flex justify-center'>
              <Link
                href='/pages/Book-call'
                className=' text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-[#1D99EC] py-5 px-12 hover:bg-darkmode duration-300'>
                Book a call
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}
export default Join
