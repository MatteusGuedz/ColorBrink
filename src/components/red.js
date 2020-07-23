import React from 'react';
import Circle from './Circle'
import { useValues } from '../context/Values';

export default function Red() {
  const {ValRed, setValRed} = useValues();
  const {ColorRed, setColorRed} = useValues();


 function handleMudarSlide(event, newValue){
    setValRed(newValue);
    setColorRed(`rgba(${ValRed},0,0)`)
  };

  return (
   <Circle 
   handleChange={handleMudarSlide}
   Value={ValRed}
   BackGround={ColorRed} /> 
   
  );
}


