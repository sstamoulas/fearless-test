import React, { useState } from 'react';
import countapi from 'countapi-js';

import Main from './components/main/main.component';
import Loading from './components/loading/loading.component';

const defaultKey = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

const App = () => {
  const [state, setState] = useState({ key: defaultKey, totalHits: undefined });
  const { key, totalHits } = state;

  const updateHits = (hits) => {
    setState(prevState => ({ ...prevState, totalHits: hits }));
  }

  const inputHandler = (event) => {
    setState(prevState => ({ ...prevState, key: event.target.value }));
  }

  return (
    <Main
      apiKey={key}
      totalHits={totalHits}
      inputHandler={inputHandler}
      updateHits={updateHits}
     />
  )
}

export default App;
