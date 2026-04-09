import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
      <Image
        src={getImgPath("/images/hero/Logo_BDB_without_bcground.png")}
        alt="logo"
        width={10}
        height={50}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/hero/Logo_BDB_without_bcground.png")}
        alt="logo"
        width={1}
        height={5}
        style={{ width: '8vw', height: '6vw' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
