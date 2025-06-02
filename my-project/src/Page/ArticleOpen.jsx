import React from 'react'
import Container from '../Layer/Container'
import { IoSearch, IoTimerSharp } from 'react-icons/io5'

import PlayStationPlus from '/PlayStationPlus.png'
import recommended1 from '/recommended1.png'
import recommended2 from '/recommended2.png'
import recommended3 from '/recommended3.png'
import recommended4 from '/recommended4.png'
import recommended5 from '/recommended5.png'
import recommended6 from '/recommended6.png'
import { FaCircleUser, FaFacebookF, FaLinkedinIn, FaMessage, FaXTwitter } from 'react-icons/fa6'

let RecommendedChild = ({src,className})=>{
  return(
    <div className={`child flex items-center gap-[18px] ${className}`}>
                    <div className="img  ">
                      <img className='w-[95px] h-[95px] md:w-auto md:h-auto' src={src} alt="" />
                    </div>
                    <div className="text">
                    <p className='text-[17px] md:text-[24px] font-pop text-[#E614FC] w-[166px] md:w-[234px] '>Post title article title
                    name article blog...</p>

                    <p className='text-white/40 font-Inter text-[15px] md:text-[20px] flex items-center gap-[7px] mt-3'>
                    <IoTimerSharp className=' h-5 md:h-[31px] w-5 md:w-[31px]'/>
                    3 min read
                    </p>
                    </div>
                  </div>
  )
}

const ArticleOpen = () => {
  return (
    <div className=''>
      <Container>
           
           <div>
           <div className='flex items-center   pt-4 md:pt-[51px] pb-2.5 md:pb-[42px] '>
                      <h3 className='text-white font-Inter text-[16px] md:text-[36px] mr-[34px]'>Blog Articles</h3>

                      <div className='w-[756px]  justify-between hidden md:flex'>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                      </div>

                      <div className="searchBar w-[186.85px] md:w-[350px] relative  md:ml-[320px] ">
                                      <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[12px] md:text-[22px] outline-none w-full py-[7.5px] md:py-3 px-[12.5px] md:px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                     
                                      <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                      
                      </div>

                      
              </div>
              <div className='w-[327px]  justify-between md:hidden flex pb-7 '>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                        <span className='py-[7px] md:py-3 px-2 md:px-[22px] border rounded-[10px] text-white font-OS text-[12px] md:text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                      </div>
           </div>

              <div className=' bg-[url("/public/BlogBanner.png")] h-[445px] md:h-full bg-cover bg-right md:bg-center bg-no-repeat w-[327px]  md:w-[1664px] relative after:absolute after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:rounded-[25px] after:-z-30 z-30 rounded-[25px]  '>

              <div className='pt-[213px] md:pt-[486px] '>


              <div className='bg-gradient-to-t from-0% from-black pb-[22px] md:pb-[69px] pl-[26px] md:pl-[69px] pt-20 md:pt-[106px] rounded-[25px]'>
  
                      <div className='flex gap-[6px]  md:gap-[11px]'>
                        <span className='py-1 px-[6px] md:px-2.5 bg-white font-OS text-[12px] md:text-[18px] rounded-[10px]'>Gaming</span>

                        <span className='py-1 px-[6px] md:px-2.5 bg-white font-OS text-[12px] md:text-[18px] rounded-[10px]'>Stray</span>
                      </div>

                      <h3 className='font-Inter text-white w-[198px] md:w-auto text-[26px] md:text-[68px] mt-[9px] mb-[17px] md:mb-[22px]'>Top digital game releases</h3>

                      <div className='flex items-center gap-3 md:gap-[22.5px]'>
                        <p className='text-[13px] md:text-[24px] font-Inter text-[#E614FC]'>19 Sep, 23</p>

                        <p className='text-white font-OS text-[14px] md:text-[20px] flex items-center gap-[5px] md:gap-[7px]'>
                        <IoTimerSharp className='text-white/40 h-[17px] md:h-[31px] w-[17px] md:w-[31px]' />
                      
                        3 min read
                        
                        </p>
                      </div>
              </div>


              </div>
              
                
              </div>

              <div className="flex md:flex-row flex-col justify-between mt-[71px]">

              <div className="left w-[327px] md:w-[1042px] ">

              <p className='font-Inter text-white text-[16px] md:text-[24px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              has been the industry's standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, <span className='hidden md:inline '> but also the leap into electronic typesetting, remaining essentially 
              unchanged. It was popularised in the 1960s.</span>
              </p>

              <div className='h-[1px] md:h-[2px] w-[318px] md:w-[1069px] bg-white/20 md:bg-custom-gradient md:mt-[83px] md:mb-[65px] my-[25px]'
                ></div>

                <h3 className='font-pop text-white text-[17px] md:text-[48px] font-medium w-[267px] md:w-[752px]'>
                Introducing Reader. A Stunning
                Experience
                </h3>

                <p className='font-Inter text-white text-[16px] md:text-[24px] md:mt-[39px] mb-[17px] md:mb-[74px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen <span className='hidden md:inline '> book. It has 
                not only five centuries, but also the leap.</span>
                </p>

                <img className='w-[319px] h-[196px] md:w-auto md:h-auto' src={PlayStationPlus} alt="" />

                <p className='font-Inter text-white text-[16px] md:text-[24px] mt-[13px] md:mt-[39px] mb-[30px] md:mb-[74px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen <span className='hidden md:inline '> book. It has 
                not only five centuries, but also the leap.</span>
                </p>



              <div className='flex justify-between'>
                <div className="child w-[131px] md:w-[357px] bg-[#1E2127] rounded-[15px] md:rounded-[25px] p-4 md:py-[37px] md:px-[45px]">
                  <p className='font-Inter text-white text-[15px] md:text-[28px]'>Author:</p>

                  <p className='flex items-center text-white text-[15px] md:text-[26px] font-Inter mt-5 gap-2.5'>
                  <FaCircleUser className='w-[22px] md:w-[35px] h-[22px] md:h-[35px]' />
                  Username
                  </p>

                </div>
                <div className="child w-[171px] md:w-[649px] bg-[#1E2127] rounded-[15px] md:rounded-[25px] py-[15px] md:py-[37px] px-4 md:px-[45px]">
                  <p className='font-Inter text-white text-[15px] md:text-[28px]'>Share This Article:</p>

                  <ul className='flex  gap-[6px] md:gap-2 mt-[19px]'>
                     <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center text-white '><FaXTwitter /></li>
                     <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaMessage /></li>
                     <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaFacebookF /></li>
                     <li className='w-[30px] h-[30px] md:w-[49px] md:h-[49px] rounded-full bg-gradient-to-tr from-[#00DBDE] from-1% via-[#7E6EEF] via-50% to-[#FC00FF] to-100% flex items-center justify-center  text-white'><FaLinkedinIn /></li>
                   </ul>

                </div>

              </div>


                

              </div>


              <div className="right w-[327px] md:w-[526px] bg-[#1E2127] h-[231px]  md:h-[407px] pr-[10px] md:pr-[57px] pl-[18px] md:pl-[41px] pt-[22px] md:pt-[36px] pb-[225px] md:pb-[390px] rounded-[15px] md:rounded-[25px] mt-20 md:mt-0">
                
                <h3 className='text-white text-[16px] md:text-[30px] font-Inter'>Browse by Tags</h3>

                <div className="tag flex flex-col gap-2 md:gap-[23px] mt-4 md:mt-8">


                <div className="div flex gap-[9px] md:gap-[14px] ">
                  <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>game</span>
                  <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>STRAY</span>
                  <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>GAMING NEWS</span>

                </div>

                <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>WHICH CONSOLE IS BEST VALUE FOR MONEY?</span>

                <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>GET YOUR PC GAME KEYS NOW: LATEST</span>

                <div className='flex gap-[9px] md:gap-[14px]'>
                <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>IS SIFU FOR PC?</span>

                <span className='py-2 md:py-[13px] px-3 md:px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[12px] md:text-[17px] uppercase'>DESTINY</span>
                </div>



                </div>

                
              </div>

              </div>


              <div>
                <div className="recommended w-[327px] md:w-[1057px] bg-gradient-to-b from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[15px] md:rounded-[25px] mt-20 md:mt-[133px]">
                  <div className="bg-[#1E2127] rounded-[15px] md:rounded-[25px] p-6 md:p-[50px]">


                <div className="up flex justify-between items-center">
                  <h3 className='font-Inter text-[18px] md:text-[34px] text-white'>Recommended Articles</h3>
                  <div className=' hidden md:block h-[1px] md:h-[2px] w-[40px] md:w-[560px] bg-custom-gradient'
                ></div>
                </div>

                <div className="down grid md:grid-rows-3 md:grid-cols-2 gap-4 md:gap-y-[57px] mt-4 md:mt-11">
                  <RecommendedChild
                  src={recommended1}
                  />
                  <RecommendedChild
                  src={recommended2}
                  className='hidden md:flex'
                  />
                  <RecommendedChild
                  src={recommended3}
                  className='hidden md:flex'
                  />
                  <RecommendedChild
                  src={recommended4}
                  className='hidden md:flex'
                  />
                  <RecommendedChild
                  src={recommended5}
                  />
                  <RecommendedChild
                  src={recommended6}
                  />
                  
                </div>



                  </div>
                </div>



                <div className="contact w-[327px] md:w-[1057px] bg-[#1E2127] rounded-[15px] md:rounded-[25px] my-20 md:mt-[121px] md:mb-[196px] py-6 md:py-[45px] px-7 md:px-[50px] ">

                <div className="up flex justify-between items-center ">
                  <h3 className='font-Inter text-[18px] md:text-[34px] text-white'>Article Comments</h3>
                  <div className='h-[1px] md:h-[2px] hidden md:block w-[40px] md:w-[560px] bg-custom-gradient'
                ></div>
                </div>

                <div className="down mt-4 md:mt-10">
                  <div className='flex flex-col md:flex-row justify-between gap-2.5 '>
                  <input className='bg-[#15181D] py-2.5 md:py-[15px] pl-3  md:pl-[21px] md:w-[468px] rounded-[5px] md:rounded-[10px] text-white/50 font-Inter text-[14px] md:text-[24px] outline-none' type="text" placeholder='Name:' />
                  <input className='bg-[#15181D] py-2.5 md:py-[15px] pl-3  md:pl-[21px] md:w-[468px] rounded-[5px] md:rounded-[10px] text-white/50 font-Inter text-[14px] md:text-[24px] outline-none' type="text" placeholder='Email:' />
                  </div>


                  <input className='bg-[#15181D] pt-2.5 md:pt-[15px] pb-[87px] md:pb-[134px] px-3 md:px-[21px] w-full rounded-[5px] md:rounded-[10px] text-white/50 font-Inter text-[14px] md:text-[24px] outline-none mt-3 md:mt-7' type='text' placeholder='Comment:' />


                  <button className='px-2.5 md:px-[31px] py-2 md:py-[17px] text-[12px] md:text-[23px] text-white font-Inter bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% rounded-[5px] md:rounded-[10px] mt-7'>Publish</button>
                </div>
                  
                </div>
              </div>

        </Container>
        </div>
  )
}

export default ArticleOpen