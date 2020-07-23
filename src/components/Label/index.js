import React from 'react';

import { useValues} from '../../context/Values';
import {Vizu, Text} from './styles';

export default function Label() {
  
  const {
    ValRed, 
    ValGreen,
    ValBlue,
    Result,
    setResult
  } = useValues();
  
   const resultado = `rgb(${ValRed},${ValGreen},${ValBlue})`
   setResult(resultado)
 
   return ( 
   <Vizu style={{background: Result}}>
      <Text>{Result}</Text>
   </Vizu>
 
  );
}


