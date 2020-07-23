import React from 'react';
import {Corpo, BoxCom, BoxBottom} from './Global';

//components
  import Red from './components/red';
  import Green from './components/green';
  import Blue from './components/blue';
  import Label from './components/Label';


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