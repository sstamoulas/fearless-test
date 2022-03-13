import React, { useState } from 'react';
import countapi from 'countapi-js';

import './main.styles.css';

const Main = ({ apiKey, totalHits, inputHandler, updateHits }) => {
  const callHitAPI = () => countapi.hit(apiKey);
  const hitHandler = async () => {
    const { value } = await callHitAPI();
    updateHits(value);
  }

  return (
    <div className='main-content'>
      <label htmlFor='key'>Key:&nbsp;</label>
      <input type='text' id='key' value={apiKey} onChange={inputHandler} />
      <button onClick={hitHandler}>Hit the API</button>
      <div>Total Hits: {totalHits}</div>
    </div>
  )
}

export default Main;
