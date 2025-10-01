'use client'
import { useEffect, useState } from 'react'
import { aboutdata } from '@/app/types/aboutdata'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import AboutSkeleton from '../../Skeleton/AboutUs'

const Aboutus = () => {
  const [about, setAbout] = useState<aboutdata[]>([])
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setAbout(data.Aboutdata)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id='About' className='bg-cover bg-center overflow-hidden relative py-20'>
      {/* Animated background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br  opacity-60'></div>
      
      {/* Floating shapes */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
      <div className='absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>

      <div className='container mx-auto max-w-7xl px-4 relative z-10'>
        <div className='p-8 md:p-12 bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden'>
          {/* Animated dots pattern */}
          <div className='absolute inset-0 opacity-5'>
            <div className='absolute inset-0' style={{
              backgroundImage: 'radial-gradient(circle, #1D99EC 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <Image
            src='/images/aboutus/dots.svg'
            width={100}
            height={100}
            alt='dots-image'
            className='absolute bottom-1 -left-20 opacity-20 animate-pulse'
          />

          {/* Header with fade-in animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className='relative flex justify-center mx-auto'>
              <p className='text-center text-primary text-lg tracking-widest uppercase mt-10 font-semibold relative z-10'>
                about us
              </p>
              
            </div>
            <h2 className='text-center pb-12 mt-4 font-bold' style={{
              background: 'linear-gradient(to right, #0D7AC7, #1D99EC, #3DAEF5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Know more about us.
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative z-10'>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <AboutSkeleton key={index} />
                ))
              : about.map((item, i) => (
                  <div
                    key={i}
                    className={`group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionDelay: `${i * 150}ms`
                    }}>
                    {/* Gradient overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-br from-[#1D99EC] to-[#0D7AC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl'></div>
                    
                    {/* Shine effect */}
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
                    </div>

                    {/* Content */}
                    <div className='relative z-10'>
                      <h5 className='group-hover:text-white mb-5 transition-colors duration-300 font-bold'>
                        {item.heading}
                      </h5>
                      
                      {/* Image container with animation */}
                      <div className='mb-5 relative w-24 h-24 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                        <div className='absolute inset-0 bg-blue-100 rounded-2xl group-hover:bg-white/20 transition-colors duration-300'></div>
                        <Image
                          src={item.imgSrc}
                          alt={item.imgSrc}
                          width={100}
                          height={100}
                          className='relative z-10 p-3'
                        />
                      </div>

                      <p className='text-lg font-normal text-gray-700 group-hover:text-white mb-5 transition-colors duration-300 line-clamp-4'>
                        {item.paragraph}
                      </p>

                      <Link
                        href={item.path}
                        className='inline-flex items-center text-lg font-semibold text-primary group-hover:text-white transition-colors duration-300 relative'>
                        <span className='relative'>
                          {item.link}
                          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300'></span>
                        </span>
                        <Icon
                          icon='tabler:chevron-right'
                          width='20'
                          height='20'
                          className='ml-1 transform group-hover:translate-x-2 transition-transform duration-300'
                        />
                      </Link>
                    </div>

                    {/* Corner accent */}
                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Aboutus