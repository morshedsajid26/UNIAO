import React from 'react'
import Container from './Container'

const Blog = () => {
  return (
    <div>
        <Container>

        <div className='flex items-center justify-center gap-[43px] mb-[35px]'>
                <h1 className='text-[16px] md:text-[36px] font-OS text-white'>Blog Articles</h1>
                <div className='h-[1px] md:h-[2px] w-[66px] md:w-[1140px] bg-custom-gradient'
                ></div>



                

                <button className='border py-[7px] md:py-3 px-[10.5px] md:px-[18px] text-white font-OS text-[12px] md:text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
            </div>

        </Container>
    </div>
  )
}

export default Blog