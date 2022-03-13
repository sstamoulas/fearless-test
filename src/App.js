import React, { useState } from 'react';

import Main from './components/main/main.component';
import Loading from './components/loading/loading.component';

const App = () => {
  const [state, setState] = useState({ totalHits: undefined });
  const { totalHits } = state;

  const updateHits = (hits) => {
    setState(prevState => ({ ...prevState, totalHits: hits }));
  }

  return (
    <Main
      totalHits={totalHits} 
      updateHits={updateHits} 
    />
  )
}

export default App;
