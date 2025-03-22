import { color } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  const logoVariable=[{
    text:"s"
  }]

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
      {/* <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={160}
        height={40}
        // style={{ width: 'auto', height: 'auto' }}
        quality={100}
      /> */}
      <div className=' text-center   gap-4  w-40 h-16'>
        <h1 className='text-[#bb8528]'>SMART</h1>
        <div className='flex justify-between '>
        <div className='bg-[#006cb0] size-10  '>
          <h1 className='text-white'>C</h1>
        </div>
        <div className='bg-[#8f2b8c] size-10 '>
        <h1 className='text-white'>E</h1>
        </div>
        <div className='bg-[#29a084] size-10 flex items-center justify-center '>
        <h1 className='text-white'>O</h1>
        </div>
        </div>
       
      </div>
      
    </Link>
  );
};

export default Logo;
