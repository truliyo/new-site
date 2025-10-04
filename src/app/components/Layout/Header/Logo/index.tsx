import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="text-3xl font-semibold">
      <div className="relative w-[180px] h-[50px] md:w-[240px] md:h-[65px] lg:w-[300px] lg:h-[80px]">
        <Image
          src="/images/hero/new-logo-removebg-preview.png"
          alt="logo"
          width={180}
          height={50}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
