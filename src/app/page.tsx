import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Aboutus from '@/app/components/Home/AboutUs'
import Dedicated from '@/app/components/Home/Dedicated'
import Digital from '@/app/components/Home/Digital'
import Beliefs from '@/app/components/Home/Beliefs'
import Work from '@/app/components/Home/Work'
import Team from '@/app/components/Home/Team'
import Featured from '@/app/components/Home/Featured'
import Manage from '@/app/components/Home/Manage'
import FAQ from '@/app/components/Home/FAQ'
import Testimonial from '@/app/components/Home/Testimonials'
import Articles from '@/app/components/Home/Articles'
import Join from '@/app/components/Home/Joinus'
import Insta from '@/app/components/Home/Insta'
import ServicesGrid from './components/Home/our-services'
import WhatSetsUsApart from './components/Home/Setus-apart'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Truliyo Digital',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Dedicated />
      {/* <Digital /> */}
      <Beliefs />
      {/* <Work /> */}
      <Team />
      <ServicesGrid />
      <WhatSetsUsApart />
      {/* <Featured /> */}
      {/* <Manage /> */}
      {/* <FAQ /> */}
      <Testimonial />
      {/* <Articles /> */}
      <Join />
      <Insta />
    </main>
  )
}
