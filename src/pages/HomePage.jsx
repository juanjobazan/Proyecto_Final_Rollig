import React from 'react'
import CarouselHome from '../components/Carousel'
import CardServ from '../components/CardServ'
import CardComp from '../components/CardComp'

const HomePage = () => {
  return (
    <>
    <CarouselHome/>
   
      <CardComp/>
      <hr />
    <div className="container">
      <div className="row">
      <div className='d-flex'><h3>Servicios</h3></div>
      </div>
    </div>
      <CardServ/>
     
    </>
  )
}

export default HomePage
