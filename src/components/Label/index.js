import React from 'react';
// import { useValues } from '../../context/Values';


import { useValues} from '../../context/Values';
import {Vizu, Text} from './styles';

export default function Label() {
  
  const {
    ValueRed, 
    ValueGreen,
    ValueBlue,
    Result,
    setResult
  } = useValues();
  
 
   const resultado = `#${ValueRed}${ValueGreen}${ValueBlue}`

   setResult(resultado)


  
  return (

       

   <Vizu style={{background: Result}}>
      <Text>{Result}</Text>

   </Vizu>

   
  );

}


