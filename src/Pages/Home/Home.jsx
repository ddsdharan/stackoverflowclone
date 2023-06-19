import React from 'react'
import LeftSidebar from '../../Components/LeftSideBar/LeftSideBar'
import HomeMainbar from '../../Components/HomeMainBar/HomeMainbar'
import RightSidebar from '../../Components/RightSideBar/RightSidebar'
import '../../App.css'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Home