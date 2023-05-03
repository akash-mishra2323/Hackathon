import React from 'react'
import Hero from '../Hero/Hero'
import Hading from '../hading/Hading'
import Top_places from '../Top_places/Top_places'
import Pkg from '../Packages/HomeP/Pkg'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Hading/>
        <Top_places/>
        <Pkg/>
        <div style={{
          marginTop:"251px"
        }}>
        <Footer/>

        </div>
    </div>
  )
}

export default Home