import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

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
        <h1 className='text=[#d4ac67]'>SMART</h1>
        <div className='flex justify-between '>
        <div className='bg-[#006cb0] size-10  '>
          <p>C</p>
        </div>
        <div className='bg-[#8f2b8c] size-10 '>
          <p>E</p>
        </div>
        <div className='bg-[#29a084] size-10 '>
          <p>O</p>
        </div>
        </div>
       
      </div>
      
    </Link>
  );
};

export default Logo;
