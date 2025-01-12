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
import Container from '../Layer/Conatiner';



const Navbar = () => {
  return (
    <div>
      <Container>
        <ul className='flex justify-between items-center pt-[46px] pb-[59px]'>
            <Li src={Li_1}/>
            <Li src={Li_2}/>
            <Li src={Li_3}/>
            <Li src={Li_4}/>
            <Li src={line}/>
            <Li src={Li_5}/>
            <Li src={Li_6}/>
            <Li src={Li_7}/>
            <Li src={Li_8}/>
        </ul>

      </Container>
    </div>
  )
}

export default Navbar