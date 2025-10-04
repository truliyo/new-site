'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

const Hero = () => {
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
    },
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }

  const leftAnimation = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
    },
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }

  const rightAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
    },
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
    },
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
    },
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }

  return (
    <section className='relative overflow-hidden bg-gradient-to-br bg-white min-h-screen flex items-center mt-10 '>
      {/* Animated Background Elements */}
      <motion.div 
        className='absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl'
        style={{ backgroundColor: 'rgba(29, 153, 236, 0.15)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className='absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl'
        style={{ backgroundColor: 'rgba(29, 153, 236, 0.1)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Icons */}
      <motion.div 
        className='absolute top-1/4 left-[15%] hidden xl:block'
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* <Icon icon="mdi:chart-line" className='text-6xl text-[#1D99EC]/30' /> */}
      </motion.div>
      <motion.div 
        className='absolute top-1/3 right-[10%] hidden xl:block'
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Icon icon="mdi:lightbulb-on" className='text-5xl text-[#1D99EC]/30' />
      </motion.div>
      <motion.div 
        className='absolute bottom-1/4 left-[10%] hidden xl:block'
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Icon icon="mdi:rocket-launch" className='text-5xl text-[#1D99EC]/30' />
      </motion.div>

      <div className='container mx-auto max-w-7xl px-4 py-10 lg:py-0 relative z-10'>
        <motion.div 
          className='grid grid-cols-12 gap-8 lg:gap-12 items-center'
          variants={containerAnimation}
          initial="initial"
          animate="animate"
        >
          {/* Left Column - Text Content */}
          <div className='col-span-12 lg:col-span-6 xl:col-span-6'>
            <motion.div variants={scaleIn}>
              {/* <div className='inline-flex items-center gap-2 py-3 px-6 bg-[#1D99EC]/10 rounded-full w-fit mb-6 backdrop-blur-sm border border-[#1D99EC]/30'>
                <Icon icon="mdi:sparkles" className='text-[#1D99EC] text-xl' />
                <p className='text-[#1D99EC] text-base lg:text-lg font-bold'>
                  Truliyo Digital
                </p>
              </div> */}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-6'>
                <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
                  One-Stop
                </span>
                <br />
                <span className='text-[#1D99EC]'>
                  Digital
                </span>
                <br />
                <span className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent'>
                  Powerhouse
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className='text-lg lg:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed'>
                Transform your brand with 360° digital marketing solutions. From strategy to execution, we handle everything so you can focus on what you do best.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div variants={fadeInUp} className='flex flex-wrap gap-3 mb-10'>
              <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Icon icon="mdi:check-circle" className='text-[#1D99EC] text-xl' />
                <span className='text-sm font-medium text-gray-700'>Performance Marketing</span>
              </div>
              <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Icon icon="mdi:check-circle" className='text-[#1D99EC] text-xl' />
                <span className='text-sm font-medium text-gray-700'>Brand Strategy</span>
              </div>
              <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100'>
                <Icon icon="mdi:check-circle" className='text-[#1D99EC] text-xl' />
                <span className='text-sm font-medium text-gray-700'>Scale Faster</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            {/* <motion.div variants={fadeInUp} className='flex flex-wrap gap-4'>
              <Link href={'#About'}>
                <motion.button 
                  className='group relative bg-[#1D99EC] text-white text-lg font-semibold py-4 px-10 rounded-full overflow-hidden transition-all duration-300 shadow-lg shadow-[#1D99EC]/30 hover:shadow-2xl hover:shadow-[#1D99EC]/50'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='relative z-10 flex items-center gap-2'>
                    Get Started
                    <Icon icon="mdi:arrow-right" className='text-xl group-hover:translate-x-1 transition-transform' />
                  </span>
                  <motion.div
                    className='absolute inset-0 bg-[#1680c7]'
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href={'#contact'}>
                <motion.button 
                  className='group bg-white text-gray-900 text-lg font-semibold py-4 px-10 rounded-full border-2 border-gray-200 hover:border-[#1D99EC] hover:text-[#1D99EC] transition-all duration-300 hover:shadow-lg'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='flex items-center gap-2'>
                    Learn More
                    <Icon icon="mdi:play-circle" className='text-xl transition-colors' />
                  </span>
                </motion.button>
              </Link>
            </motion.div> */}

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className='grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200'
            >
              <div>
                <h3 className='text-3xl lg:text-4xl font-bold text-[#1D99EC] mb-1'>10+</h3>
                <p className='text-sm text-gray-600'>Years Experience</p>
              </div>
              <div>
                <h3 className='text-3xl lg:text-4xl font-bold text-[#1D99EC] mb-1'>500+</h3>
                <p className='text-sm text-gray-600'>Projects Delivered</p>
              </div>
              <div>
                <h3 className='text-3xl lg:text-4xl font-bold text-[#1D99EC] mb-1'>98%</h3>
                <p className='text-sm text-gray-600'>Client Satisfaction</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            className='col-span-12 lg:col-span-6 xl:col-span-6 relative'
            variants={rightAnimation}
          >
            <motion.div
              className='relative'
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src='/images/hero/banner-image.png'
                alt='Digital marketing solutions and brand strategy'
                width={700}
                height={700}
                className='w-full h-auto drop-shadow-2xl'
                priority
              />
              
              {/* Decorative elements around image */}
              <motion.div
                className='absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40'
                style={{ backgroundColor: '#1D99EC' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className='absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-2xl opacity-30'
                style={{ backgroundColor: '#1D99EC' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Floating Card - Achievement */}
            <motion.div
              className='absolute bottom-10 left-0 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px] hidden lg:block border border-gray-100'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='flex items-center gap-3 mb-2'>
                <div className='bg-[#1D99EC]/10 p-2 rounded-lg'>
                  <Icon icon="mdi:trending-up" className='text-2xl text-[#1D99EC]' />
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-gray-900'>300%</h4>
                  <p className='text-xs text-gray-600'>ROI Growth</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card - Client Count */}
            <motion.div
              className='absolute top-20 right-0 bg-white rounded-2xl shadow-2xl p-6 max-w-[200px] hidden xl:block border border-gray-100'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className='flex items-center gap-3 mb-2'>
                <div className='bg-[#1D99EC]/10 p-2 rounded-lg'>
                  <Icon icon="mdi:account-group" className='text-2xl text-[#1D99EC]' />
                </div>
                <div>
                  <h4 className='text-2xl font-bold text-gray-900'>1000+</h4>
                  <p className='text-xs text-gray-600'>Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero