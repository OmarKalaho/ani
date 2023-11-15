import Image from 'next/image'

const Logo = () => {
    return (
      <div >

        <Image
              src="/Anita FINAL LOGO-02.png"
              alt="LOGO"
            
              width={300}
              height={300}
              priority
            />
          
      </div>
    );
  };
  export default Logo;