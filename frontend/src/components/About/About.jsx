import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

function About() {
    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                    {/* <=========about images=====> */}


                    <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                        <img src={aboutImg} alt="" />
                        <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[30%] md:right-[-7%] lg:right-[22%]'>
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    {/* <=========About  Content=======> */}

                    <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                        <h2 className='heading'>Proud to be one of the nations best </h2>
                        <p className='text_para'>For the past 30 years in a row, Pakistan news and the world have recognized us as one of the best public hospitals in the nation and the #1 in South Asia. Striving for excellence is part of our daily mission. We focus on caring for our patients, not resting on our laurels but continuously looking forward to what we can achieve tomorrow.  </p>
                        <p className='text_para mt-[30px]'>Pakistan drives us to enhance the healthcare experience for every individual who walks through our doors.Our state-of-the-art facilities, coupled with a compassionate and skilled medical team, ensure that patients receive the highest quality of care. We continuously innovate and adopt the latest medical advancements to improve patient outcomes.
                        </p>
                        <Link to='/'><button className='btn'>Learn More</button></Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About