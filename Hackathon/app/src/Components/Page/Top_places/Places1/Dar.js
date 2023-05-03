import React from 'react'
import '../Places1/Dar.css'
import Carousel from 'react-bootstrap/Carousel'

const Dar = () => {
  return (
    <div className='container11'>
    <div className='image1'>
              <h1>Darjeeling</h1>
      <h3> <br/> A History of the world's Greatest <br/> Tea</h3>
    </div>
    <div className='text'>
    <h3>Darjeeling: An overview</h3>
    <p>As you look up Darjeeling tour packages, it makes sense to have a fair idea about the destination you are planning to visit. Darjeeling is like a gorgeous ribbon wound around a tall and jagged mountain ridge and surrounded on all sides by lush tea plantations. The scenery is completed by the towering white peaks of the majestic Khangchendzonga. Darjeeling, a hill station in West Bengal is popular for its undulating tea estates, views of the Himalayas and its verdant greenery. At Darjeeling you will be rewarded with uninterrupted views of the Khangchendzonga which is the third largest mountain in the world. You would be occupied through the day visiting Buddhist monasteries, elegant colonial-era architecture and not to mention, have fun riding on the 140-year-old Darjeeling Himalayan Railway, billowing wispy smoke into the blue sky. Those in love with the outdoors can hike up to the Singalila Ridge. There would be ample opportunities to go mountain biking on the hill slopes. When not exploring your scenic surroundings, walk up the steep, winding bazaars that are choc-a-bloc with knickknacks, souvenirs among other items locally produced and sold by people from Tibet, Sikkim, Nepal and Bhutan. A Darjeeling trip is incomplete if you do not unwind at a local tea stall and enjoy a strong brew to go with a plate of steaming momo.</p>
    <br/>
    
    <h3>Places to visit in Darjeeling</h3>
    <p>While shortlisting one of the Darjeeling holiday packages, ensure it includes the rarer gems, the local haunts and the traditional touristy spots. On a holiday in this very cosmopolitan hill station, you will be spoilt for choice for there are so many sights that you would feel if only you had more days on your hands. Some of the popular places to visit in Darjeeling comprise.</p>

<h3>
Darjeeling Himalayan Railway
</h3>
<p>
Popularly referred to as the toy train, the Darjeeling Himalayan Railway as an extension of the North Bengal State Railway went on its first ride in 1881 on two-foot-wide tracks, climbing the arduous 88 kilometre to Darjeeling from New Jalpaiguri through Siliguri. It is still among the few operational hill railways in the country and also a UNESCO World Heritage Site. It is a thrilling ride of two hours from Darjeeling to Ghum and back cutting through pristine mountain scenery, taking in the fresh air, under a clear blue sky. On a visit to Darjeeling you can spot the toy train following the Hill Cart Road, crossing it periodically. While the toy train has lost its importance as a mode of transport the way it used to be in the British era, it still has vanity value, bringing in hordes of tourists to the hill station to experience this joy ride. There are about six of them that are pulled by steam locomotives, an antique in itself and about three or more that function on diesel-operated engines. One diesel-powered train traverses the route everyday from New Jalpaiguri to Darjeeling, taking 7 hours in each direction to cover the 88 kilometres.
<br/>The other goes from Kurseong to Darjeeling and returns to the starting point. The first-class coaches have large windows, affording magnificent views of the hills and the forests and an entire wild terrain opens up before you as the scenery slowly unfolds. Second class too gives you a great view but is often crowded. The railway reaches its highest point close to Ghum at Jorebungalow at 7998 foot just 7 kilometre shy of Darjeeling and suddenly you are faced with the panorama of the Khangchendzonga range. Beyond Ghum the train makes a circle at the Batasia Loop, the most dramatic of the three loops the train makes.
</p>

    </div>
    <div className='crasel'>
    <div className='crawsel'>
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dddd6ghhk/image/upload/v1668837465/85d78ffd-3958-4475-85f0-637bcb64fd27_sm7wqt.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dddd6ghhk/image/upload/v1668837451/a65d8e38-3ea0-486e-bca4-f3e8077bd7c7_iveuwa.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://res.cloudinary.com/dddd6ghhk/image/upload/v1668837447/0ce6f58b-c070-4588-9338-ddc602b1b4af_uxtdrf.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  </div>
  </div>
  )
}

export default Dar