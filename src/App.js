import React from 'react';
import {Corpo, BoxCom, BoxBottom} from './Global';

//components
  import Red from './components/Red';
  import Green from './components/Green';
  import Blue from './components/Blue';
  import Label from './components/Label';

// import { Container } from './styles';

function App() {
  return (
  
    <Corpo>
    <BoxCom>
      <Red />
      <Green />
      <Blue />
    </BoxCom>

    <BoxBottom>
    <Label />
    </BoxBottom>
    </Corpo>
     
  
  )
}

export default App;