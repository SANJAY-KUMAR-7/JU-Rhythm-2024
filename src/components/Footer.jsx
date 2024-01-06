import React from 'react'
import { MapPinned } from 'lucide-react';
const Footer = () => {
    return (
        <footer  className=" foot2 md:foot2 flex items-center  flex-col py-10 px-8 ">
                <div className=" text-black pb-6 ">
                    <h1 className='team1 text-6xl md:text-7xl'>Contact Us </h1>
                </div>
                <div className="text-black mb-6 ">
                    <p className='text-xl md:text-2xl'>In case of any query or problem feel free to visit our office or contact the following numbers for the same:</p>
                </div>

                <div className="text-black flex items-center justify-center flex-col mb-4">
                    <div className='flex gap-2'>
                    <MapPinned size={30}/>
                      <p className="text-lg md:text-2xl  text-black  ">
                      JECRC University, Sitapura, Vidhani, Rajasthan -303905
                    </p> 
                </div>
                <div>
                <p className="text-lg self-center font-bold">
                        <a className="text-black" href="mailto:sdo@jecrcu.edu.in">sdo@jecrcu.edu.in</a>
                </p>
                </div>
                </div>
               
               <div className='md:flex gap-16'>
                    <div className="pb-4 md:pb-0">
                        <p className="py-1 text-xl  text-black-500 ">
                            <a className="text-black" href="tel:8949599497 tel:9782395108">Technical Head:+91 8949599497 || +91 9782395108</a>
                        </p>
                        <p className="py-1 text-xl  text-black-500 ">
                        <a className="text-black" href="tel:+91 7340554253 tel: +91 7229902019">Cultural Head:+91 7340554253 || +91 7229902019 </a>
                        </p>
                        <p className="py-1 text-xl  text-black-500 ">
                        <a className="text-black" href="tel:+91 7494996128 +91 8299531449">Sports Head: +91 7494996128 || +91 8299531449</a>
                        </p>  
                        <p className="py-1 text-xl  text-black-500 ">
                        <a className="text-black" href="tel:+91 9079790744">Media Head: +91 9079790744 </a>
                        </p>
                        <p className="py-1 text-xl  text-black-500 ">
                        <a className="text-black" href="tel:+91 7296804330 ">Sponsorship Head:+91 7296804330 || +91 8949599497</a>
                        </p>
                        <p className="py-1 text-xl  text-black-500 ">
                        <a className="text-black" href="tel: +91 8630832729">Promotion Head: +91 8630832729 || +91 9950265903 </a>
                        </p>

                    </div>
                    <div className='text-right border-2 border-black  '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.023087626716!2d75.87491107521937!3d26.775533976729168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc892b8f05399%3A0x43fbca7105eca800!2sJECRC%20University!5e0!3m2!1sen!2sin!4v1704211855400!5m2!1sen!2sin" width="450" height="220" loading="lazy"
                    allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                     
                    </div>

                            <div className="flex justify-center text-black mt-8 text-md">
                            <p className="text-white sm:order-first sm:mt-0">
                             &copy;JU-RHYTHM 2024. All Rights Reserved
                            </p>
                           </div>
                            <div className="flex flex-col justify-center items-center text-black mt-8 text-xl">
                            <div className="text-100px text-white ">
                              Devloped and designed by:
                            </div>
                            <div className='text-white'>
                            <a href='https://github.com/SANJAY-KUMAR-7'> Sanjay Kumar </a> || Arpit Sharma || Devansh Verma 
                            </div>

                    </div>
            
        </footer >
        )
}


export default Footer