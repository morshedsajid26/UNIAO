import React from 'react'
import Banner from '../Layer/Banner'
import LastOfUs from '../Layer/LastOfUs'
import ResidentEvil from '../Layer/ResidentEvil'
import NewArrivals from '../Layer/NewArrivals'
import Review from '../Layer/Review'
import SignUp from '../Layer/SignUp'

import Offer from '../Layer/Offer'
import ComingSoon from '../Layer/ComingSoon'
import WeeklyDeals from '../Layer/WeeklyDeals'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Review/>
      <WeeklyDeals/>
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