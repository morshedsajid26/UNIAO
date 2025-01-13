import React from 'react'
import Container from '../Layer/Conatiner'

const Footer = () => {
  return (
    <div className=' max-w-[1862px] mx-auto  bg-[#1E2127] g-gradient-to-l from-[#18C5E1] from-0% via-[#8666EF] via-30% to-[#FB01FF] to-100% bg-clip-border border-transparent  '>
        <Container className=' px-[100px]'>

           <div className="top grid grid-cols-12 justify-between gap-10">
            <div className="child col-span-3 bg-slate-500">
              <h3 className='text-[28px] text-[#FFFFFF] font-medium '>Trustful</h3>
            </div>


            <div className="child col-span-2 bg-slate-500">1</div>
            <div className="child col-span-2 bg-slate-500">1</div>
            <div className="child col-span-3 bg-slate-500">1</div>
            <div className="child col-span-2 bg-slate-500">1</div>
           </div>

        </Container>
    </div>
  )
}

export default Footer