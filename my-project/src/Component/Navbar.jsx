import React from 'react'


import Li from '../Layer/Li';

import Li_1 from '/Li-1.png'
import Li_2 from '/Li-2.png'
import Li_3 from '/Li-3.png'
import Li_4 from '/Li-4.png'
import line from '/line.png'
import Li_5 from '/Li-5.png'
import Li_6 from '/Li-6.png'
import Li_7 from '/Li-7.png'
import Li_8 from '/Li-8.png'
import Container from '../Layer/Container';



const Navbar = () => {
  return (
    <div>
      <Container>
        <ul className='flex justify-between items-center pt-[46px] pb-[59px]'>
            <Li imageClass='md:w-auto md:h-auto h-[24.31px] w-[31.5px] '  src={Li_1}/>
            <Li imageClass='md:w-auto md:h-auto h-[24.3px] w-[24.3px] ' src={Li_2}/>
            <Li imageClass='md:w-auto md:h-auto h-[24.3px] w-[24.3px] ' src={Li_3}/>
            <Li imageClass='md:w-auto md:h-auto h-[25.5px] w-[18.4px] ' src={Li_4}/>
            
            <li className='md:flex hidden ' >
              <img src={line} alt="" />
              </li>
              
            <Li imageClass='md:w-auto md:h-auto h-[24.5px] w-[36.64px] ' src={Li_5}/>
            <Li className='md:flex hidden' src={Li_6}/>
            <Li className='md:flex hidden' src={Li_7}/>
            <Li className='md:flex hidden' src={Li_8}/>
        </ul>

      </Container>
    </div>
  )
}

export default Navbar