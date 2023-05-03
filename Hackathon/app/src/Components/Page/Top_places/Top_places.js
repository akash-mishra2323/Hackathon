import React from 'react'
import "../Top_places/Top_places.css"
import { NavLink } from "react-router-dom";


const Top_places = () => {
  return (
    <div className='container1'>

    
            <h1 className='hop'>Top places to Visit</h1>
    <div className='container'>
        <div className='heading'>
        </div>
        <NavLink to="/mun">
        <div  className='box'>
            <img src='https://res.cloudinary.com/du71vrd2o/image/upload/v1668769804/0455eca4-86ca-43b6-9252-fd71e51af71b_dybvi6.jpg' alt=''/>
            <h3 className='h32'>Munsiyari</h3>
        </div>
        </NavLink> 
        <NavLink to="/dar">
        <div className='box'>
        <img src='https://res.cloudinary.com/du71vrd2o/image/upload/v1668769810/af77bc16-ec6b-4b14-af5b-ead5bb42a999_qraufs.jpg' alt=''/>
            <h3 className='h32'>Darjeeling</h3>
        </div>
        </NavLink>
        <NavLink to="/miz">
        <div className='box'>
        <img src='https://res.cloudinary.com/du71vrd2o/image/upload/v1668769816/1f2f949b-3677-46dd-aebb-7bfb0060f48d_yqpslg.jpg' alt=''/>
            <h3 className='h32'>Mizoram</h3>
        </div>
        </NavLink>
        <NavLink to="/ladakh">
        <div className='box'>
        <img src='https://res.cloudinary.com/du71vrd2o/image/upload/v1668770703/0174984a-d5f9-4888-9b84-f79b913ca217_l3ligv.jpg' alt=''/>
            <h3 className='h32'>Ladakh</h3>
        </div>
        </NavLink>
        <NavLink to="/auli">
        <div className='box'>
        <img src='https://res.cloudinary.com/dddd6ghhk/image/upload/v1668840182/cd0661fc-1756-4fbb-8147-545eb24ea1cf_ptltao.jpg' alt=''/>
            <h3 className='h32'>Auli</h3>
        </div>
        </NavLink>

        </div>
    </div>
  )
}

export default Top_places