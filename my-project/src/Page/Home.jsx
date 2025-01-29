import React from 'react'
import Banner from '../Layer/Banner'
import LastOfUs from '../Layer/LastOfUs'
import ResidentEvil from '../Layer/ResidentEvil'
import NewArrivals from '../Layer/NewArrivals'
import Review from '../Layer/Review'
import SignUp from '../Layer/SignUp'

import Offer from '../Layer/Offer'
import ComingSoon from '../Layer/ComingSoon'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Review/>
      <LastOfUs/>
      <NewArrivals/>
      <ResidentEvil/>
      <ComingSoon/>
      <Offer/>
      <SignUp/>

      
     
    </div>
  )
}

export default Home