import Image from 'next/image';



const Header = () => {
    return (
        <>
            <header>
                <div className="relative inset-x-0 overflow-hidden">
                    <video autoPlay muted loop
                        className='absolute inset-0 w-full h-full object-cover'
                        style={{ position: 'fixed', width: '100%', height: '142vh', objectFit: 'cover', zIndex: -3, opacity: .9 }}>
                        <source src="video2.mp4" type="video/mp4" />
                    </video>
                </div>


                <div className="flex items-center justify-center">
                    <div className="relative w-full max-w-screen-md md:mt-0 sm:mt-10">
                        <div className="relative h-0 pb-[80%] md:pb-[65%] mt-[180px] md:-mt-10 ">
                            <Image src="https://i.postimg.cc/T15JDFSQ/rhythm-logo.png" alt="logo" className=" mt-24 absolute inset-0 w-full object-contain" />  
                        </div>
 
                        <div className='flex justify-center gap-10 text-center'>
                        <div className='team2  rounded-3xl w-36 p-2 text-2xl font-bold'>
                            <a href=''>{/* PDF file to download*/}
                                Guidelines
                            </a>
                            </div>
                        <div className='team2  rounded-3xl w-36 p-2 text-2xl font-bold'>
                            <a href='/events'>
                                Register Now
                                </a>
                                </div>
                        </div>
                       

                    </div>
                </div> 
            </header>


        </>
    );
};

export default Header;





