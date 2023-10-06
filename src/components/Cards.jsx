import React from 'react';
import CardComp from './CardComp';

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
        </div>
        <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3'>
          <CardComp />
        </div>
      </div>
    </div>
  )
}

export default Cards
