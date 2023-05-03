import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import "../HomeP/Pkg.css"

const Pkg = () => {
  return (
    <div>
         <h3 className='Abhed' style={{fontWeight:"700",fontVariantCaps:"all-petite-caps", 
      background:`linear-gradient(90deg, #3dd5ff, #00ddf2, #00e3db, #2ae7bb, #6ce896, #9fe670, #cfe050, #ffd53d)`,
      WebkitBackgroundClip:"text",
      WebkitTextFillColor:"transparent",
      marginBottom:"10px",
      textAlign:"center",
      fontSize:"80px"
      
      }}> Packages </h3>
    <div className='Mainpkg'>
        <div className='pkg1'>
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://res.cloudinary.com/dddd6ghhk/image/upload/v1668835169/3b894b71-c5df-437a-9a7f-ec334887933e_rggelo.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Munsiyari 9 Days / 8 Nights</MDBCardTitle>
        <MDBCardText>
        Starts from Haldwani
Nainital (1N) Binsar(1N) Chaukori (1N) Munsiyari(1N) Kausani (1N) Ranikhet(1N) Corbett National Park (2N)
        </MDBCardText>
        <MDBBtn href='book'>Book Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className='pkg1'>
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://res.cloudinary.com/dddd6ghhk/image/upload/v1668852979/9644c620-7a74-4f76-b2ab-a0654e455771_b7ednl.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Binsar </MDBCardTitle>
        <MDBCardText>
        2 Night weakend tour
        Binsar has motorable roads is well-connected to all the major cities of Uttarakhand. The distance from the nearest major town Almora is 30 kilometers and Nainital is 96 kilometers away.
        </MDBCardText>
        <MDBBtn href='book'>Book Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className='pkg1'>
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://res.cloudinary.com/dddd6ghhk/image/upload/v1668853065/8d3126a0-db71-47a6-8641-196a2b4c5ec8_pofkgl.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Dalhousie</MDBCardTitle>
        <MDBCardText>
        Himachal Pradesh  India
        4 out of 38 Places to visit in Himachal Pradesh
        </MDBCardText>
        <MDBBtn href='book'>Book Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div className='pkg1'>
                <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://res.cloudinary.com/dddd6ghhk/image/upload/v1668837447/0ce6f58b-c070-4588-9338-ddc602b1b4af_uxtdrf.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Darjeeling</MDBCardTitle>
        <MDBCardText>
        About the destination: The 6 Days Enthralling Group Tour to Sikkim gives you one of the most Memorable..
        </MDBCardText>
        <MDBBtn href='book'>Book Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
        </div>
    </div>
    </div>
  )
}

export default Pkg