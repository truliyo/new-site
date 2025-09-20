import Link from 'next/link'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-3xl font-semibold'>
      <div className="relative w-[150px] h-[40px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]">
      <Image
        src="/images/hero/new-logo-removebg-preview.png"
        alt="logo"
        fill
        className="object-contain"
        priority
      />
    </div>
    </Link>
  )
}

export default Logo
