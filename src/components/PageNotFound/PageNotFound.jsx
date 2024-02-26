import React from 'react';
import NotFound from '../../images/pnf.jpg';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className='notfound-image'>
      <img src={NotFound} alt="" />
    </div>
  )
}

export default PageNotFound;