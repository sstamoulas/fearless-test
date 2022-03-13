import React, { useState, useEffect, useRef } from 'react';
import countapi from 'countapi-js';

import Main from './components/main/main.component';
import Loading from './components/loading/loading.component';

const defaultKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

const App = () => {
  const isMounted = useRef(false);
  const [state, setState] = useState({ key: defaultKey, totalHits: undefined });
  const { key, totalHits } = state;

  useEffect(() => {
    const callGetAPI = () => countapi.get(key);
    const getHandler = async () => {
      let { value } = await callGetAPI();
      value ||= 0;
      
      updateHits(value);
    }

    getHandler();

    isMounted.current = true;
  }, [key]);

  const updateHits = (hits) => {
    setState(prevState => ({ ...prevState, totalHits: hits }));
  }

  const inputHandler = (event) => {
    setState(prevState => ({ ...prevState, key: event.target.value }));
  }

  return isMounted.current ? (
    <Main 
      apiKey={key} 
      totalHits={totalHits} 
      inputHandler={inputHandler} 
      updateHits={updateHits} 
     />
  ) : (
    <Loading />
  )
}

export default App;
