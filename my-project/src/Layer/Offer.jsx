import React from 'react'
import Container from './Conatiner'
import OfferCard from '../Component/OfferCard'

import offer1 from '/offer1.png'
import offer2 from '/offer2.png'
import offer3 from '/offer3.png'
import offer4 from '/offer4.png'
import offer5 from '/offer5.png'

import adobe from '/adobe.png'
import aliad from '/aliad.png'
import autoDesk from '/autoDesk.png'
import maya from '/maya.png'
import max from '/max.png'


const Offer = () => {
  return (
    <div className='pt-[180px]'>
        <Container className='grid grid-cols-3 gap-[76px]'>

            <div className="left">
                <div className="top flex justify-between">
                    <h3 className='text-[36px] text-white font-OS'>Special Offers</h3>

                    <button className='border py-3 px-[18px] text-white font-OS text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
                </div>

                <div className="bottom flex flex-col gap-[21px] mt-[43px]">

                    <OfferCard
                   image={offer1}
                    heading='Far Cry 5'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                   image={offer2}
                    heading='The Devil in Me'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                   image={offer3}
                    heading='Ghost Runner'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                   image={offer4}
                    heading='Sekiro Shadows...'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                   image={offer5}
                    heading='Death Stranding'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />




                </div>
            </div>

            <div className="middle">
            <div className="top flex justify-between">
                    <h3 className='text-[36px] text-white font-OS'>Gift Cards</h3>

                    <button className='border py-3 px-[18px] text-white font-OS text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
                </div>
            </div>

            <div className="right">
            <div className="top flex justify-between">
                    <h3 className='text-[36px] text-white font-OS'>Software Deals</h3>

                    <button className='border py-3 px-[18px] text-white font-OS text-[24px] rounded-[10px]'>
                        Browse All
                    </button>
                </div>


                <div className="bottom flex flex-col gap-[21px] mt-[43px]">

                    <OfferCard
                    image={adobe}
                    heading='Adobe Acrobat'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                    image={aliad}
                    heading='Auto Desk'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                    image={autoDesk}
                    heading='Maya 2024'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                    image={maya}
                    heading='Aliad AutoStudio'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />

                    <OfferCard
                    image={max}
                    heading='3DS MAX 2024'
                    from='From'
                    to='$70 to'
                    price='$59,99'
                    save='Save 25%'
                    />




                    </div>
            </div>

        </Container>
    </div>
  )
}

export default Offer