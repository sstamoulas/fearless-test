import React, { useState } from 'react';
import countapi from 'countapi-js';

import './main.styles.css';

const Main = ({ totalHits, updateHits }) => {
  const callHitAPI = () => countapi.hit('1ccb732e-b55a-4404-ad3f-0f99c02fe44e');
  const hitHandler = async () => {
    const { value } = await callHitAPI();
    updateHits(value);
  }

  return (
    <div className='main-content'>
      <button onClick={hitHandler}>Hit the API</button>
      <div>Total Hits: {totalHits}</div>
    </div>
  )
}

export default Main;
