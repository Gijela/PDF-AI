import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  isMobile?: boolean;
}

const Logo = ({ isMobile }: LogoProps) => {
  return (
    <Link href={'/'}>
      <div className="flex  items-center">
        {/* <div className="flex justify-center items-center">
          <Image
            src="/pdf-logo.png"
            alt="Logo"
            width={30}
            height={34}
            className="sm:w-[30px] w-[21px] h-[25px] sm:h-[30px] mt-1"
          />
        </div> */}
        {/* {!isMobile ? (
          <h1 className="shadows  text-primary text-[32px] sm:text-[35px]">
            PDF AI
          </h1>
        ) : null} */}
        <h1 className="shadows  text-primary text-[32px] sm:text-[35px]">
          PDF AI
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
