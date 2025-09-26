import Image from 'next/image'
import Link from 'next/link'

const Insta = () => {
  return (
    <section className='container mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:-mb-44 lg:-mb-34 ' id='socials'>
      <div className='grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {/* Image Container 1 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          {/* Image */}
          <Image
            src='/images/insta/linked-two-ezgif.com-png-to-webp-converter.webp'
            width={306}
            height={306}
            alt='instaOne'
            className='w-full h-full object-cover'
          />

          {/* Sliding Overlay */}
          <Link href='https://www.linkedin.com/posts/truliyo-digital_truliyoway-truliyodigital-metaads-activity-7375869066403569664-6zTq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMuxg4BJlmSScX_A3s__-NN-bssm-Xo8gc' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='https://img.icons8.com/color/48/linkedin.png'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 2 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/linked-one-ezgif.com-png-to-webp-converter.webp'
            width={306}
            height={306}
            alt='instaTwo'
            className='w-full'
          />

          {/* Sliding Overlay */}
          <Link href='https://www.linkedin.com/posts/truliyo-digital_asiaexcellenceawards-bmagroup-truliyodigital-activity-7374450516841603072-0svU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMuxg4BJlmSScX_A3s__-NN-bssm-Xo8gc' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='https://img.icons8.com/color/48/linkedin.png'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 3 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/linked-three-ezgif.com-png-to-webp-converter.webp'
            width={306}
            height={306}
            alt='instaThree'
            className='w-full'
          />
          {/* Sliding Overlay */}
          <Link href='https://www.linkedin.com/posts/truliyo-digital_truliyodigital-bmagroup-mediabuying-activity-7373573888292823040-xrxI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMuxg4BJlmSScX_A3s__-NN-bssm-Xo8gc' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='https://img.icons8.com/color/48/linkedin.png'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>

        {/* Image Container 4 */}
        <div className='relative group mx-auto overflow-hidden rounded-3xl'>
          <Image
            src='/images/insta/linked-four-ezgif.com-png-to-webp-converter.webp'
            width={306}
            height={306}
            alt='instaFour'
            className='w-full'
          />
          {/* Sliding Overlay */}
          <Link href='https://www.linkedin.com/posts/truliyo-digital_blueandbites-truliyovibes-throwbackfun-activity-7335294318804389889-nROE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEMuxg4BJlmSScX_A3s__-NN-bssm-Xo8gc' target='_blank'>
            <div className='absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-3xl flex items-center justify-center'>
              <Image
                src='https://img.icons8.com/color/48/linkedin.png'
                alt='instagram'
                width={36}
                height={36}
                className='cursor-pointer'
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Insta
