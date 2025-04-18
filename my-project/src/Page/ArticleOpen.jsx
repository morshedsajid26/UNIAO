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

let RecommendedChild = ({src})=>{
  return(
    <div className="child flex items-center gap-[18px]">
                    <div className="img ">
                      <img src={src} alt="" />
                    </div>
                    <div className="text">
                    <p className='text-[24px] font-pop text-[#E614FC]  w-[234px] '>Post title article title
                    name article blog...</p>

                    <p className='text-white/40 font-Inter text-[20px] flex items-center gap-[7px] mt-3'>
                    <IoTimerSharp className=' h-[31px] w-[31px]'/>
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
           
           <div className='flex items-center  pt-[51px] pb-[42px] '>
                      <h3 className='text-white font-Inter text-4xl mr-[34px]'>Blog Articles</h3>

                      <div className='w-[756px] flex justify-between'>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300 '>All</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Gaming</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Investment</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>Software</span>
                        <span className='py-3 px-[22px] border rounded-[10px] text-white font-OS text-[24px] hover:bg-gradient-to-bl from-[#FC00FF] from-1% via-[#7E6EEF] via-50% to-[#00DBDE] to-100% cursor-pointer transition-all duration-300'>News</span>
                      </div>

                      <div className="searchBar w-[350px] relative  ml-[320px]">
                                      <input className='bg-[#1E2127] text-[#B2B8C2] font-OS text-[22px] outline-none w-full py-3 px-[23px] rounded-[10px]' type="text" placeholder='Search blog article...' />
                                     
                                      <IoSearch className='w-[22.5px] h-[22.5px] text-[#B2B8C2] absolute top-1/2 -translate-y-1/2 right-4' />
                                      
                                  </div>
              </div>

              <div className=' bg-[url("/public/BlogBanner.png")] bg-cover bg-center bg-no-repeat w-[1664px] relative after:absolute after:w-full after:h-full after:bg-black/20 after:top-0 after:left-0 after:rounded-[25px] after:-z-30 z-30 rounded-[25px]  '>

              <div className=' pt-[486px] '>


              <div className='bg-gradient-to-t from-0% from-black  pb-[69px] pl-[69px] pt-[106px] rounded-[25px]'>
  
                      <div className='flex gap-[11px]'>
                        <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Gaming</span>

                        <span className='py-1 px-2.5 bg-white font-OS text-[18px] rounded-[10px]'>Stray</span>
                      </div>

                      <h3 className='font-Inter text-white text-[68px] mt-[9px] mb-[22px]'>Top digital game releases</h3>

                      <div className='flex items-center gap-[22.5px]'>
                        <p className='text-[24px] font-Inter text-[#E614FC]'>19 Sep, 23</p>

                        <p className='text-white font-OS text-[20px] flex items-center gap-[7px]'>
                        <IoTimerSharp className='text-white/40 h-[31px] w-[31px]' />
                      
                        3 min read
                        
                        </p>
                      </div>
              </div>


              </div>
              
                
              </div>

              <div className="flex justify-between mt-[71px]">

              <div className="left w-[1042px] ">

              <p className='font-Inter text-white text-[24px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
              has been the industry's standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a type specimen book. It has survived 
              not only five centuries, but also the leap into electronic typesetting, remaining essentially 
              unchanged. It was popularised in the 1960s.
              </p>

              <div className='h-[1px] md:h-[2px] w-[40px] md:w-[1069px] bg-custom-gradient mt-[83px] mb-[65px]'
                ></div>

                <h3 className='font-pop text-white text-[48px] font-medium w-[752px]'>
                Introducing Reader. A Stunning
                Experience
                </h3>

                <p className='font-Inter text-white text-[24px] mt-[39px] mb-[74px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has 
                not only five centuries, but also the leap.
                </p>

                <img src={PlayStationPlus} alt="" />

                <p className='font-Inter text-white text-[24px] mt-[86px] mb-[70px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has 
                not only five centuries, but also the leap.
                </p>



              <div className=''>
                <div className="child w-[357px] bg-[#1E2127] rounded-[25px]">
                  <p className='font-Inter text-white text-[28px]'>Author:</p>
                </div>
                <div className="child"></div>

              </div>


                <div className="recommended w-[1057px] bg-gradient-to-b from-[#18C5E1] from-0% via-[#8666EF] via-47% to-[#FB01FF] to-100% p-[2px] rounded-[25px]">
                  <div className="bg-[#1E2127] rounded-[25px] p-[50px]">


                <div className="up flex justify-between items-center">
                  <h3 className='font-Inter text-[34px] text-white'>Recommended Articles</h3>
                  <div className='h-[1px] md:h-[2px] w-[40px] md:w-[560px] bg-custom-gradient'
                ></div>
                </div>

                <div className="down grid grid-rows-3 grid-cols-2 gap-y-[57px] mt-11">
                  <RecommendedChild
                  src={recommended1}
                  />
                  <RecommendedChild
                  src={recommended2}
                  />
                  <RecommendedChild
                  src={recommended3}
                  />
                  <RecommendedChild
                  src={recommended4}
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



                <div className=" w-[1057px] bg-[#1E2127] rounded-[25px] mt-[121px] py-[45px] px-[50px] ">

                <div className="up flex justify-between items-center ">
                  <h3 className='font-Inter text-[34px] text-white'>Article Comments</h3>
                  <div className='h-[1px] md:h-[2px] w-[40px] md:w-[560px] bg-custom-gradient'
                ></div>
                </div>
                  
                </div>

              </div>


              <div className="right w-[526px] bg-[#1E2127]  h-[407px] pr-[57px] pl-[41px] pt-[36px] pb-[390px] rounded-[25px]">
                
                <h3 className='text-white text-[30px] font-Inter'>Browse by Tags</h3>

                <div className="tag flex flex-col gap-[23px] mt-8">


                <div className="div flex gap-[14px] ">
                  <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>game</span>
                  <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>STRAY</span>
                  <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>GAMING NEWS</span>

                </div>

                <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>WHICH CONSOLE IS BEST VALUE FOR MONEY?</span>

                <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>GET YOUR PC GAME KEYS NOW: LATEST</span>

                <div className='flex gap-[14px]'>
                <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>IS SIFU FOR PC?</span>

                <span className='py-[13px] px-5 rounded-[10px] bg-[#15181D] text-white font-Inter text-[17px] uppercase'>DESTINY</span>
                </div>



                </div>

                
              </div>

              </div>

        </Container>
        </div>
  )
}

export default ArticleOpen