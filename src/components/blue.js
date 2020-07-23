import React from 'react';
import Circle from './Circle'
import { useValues } from '../context/Values';

export default function Blue() {
  const {ValBlue, setValBlue} = useValues();
  const {ColorBlue, setColorBlue} = useValues();

 function handleMudarSlide(event, newValue){
    setValBlue(newValue);
    setColorBlue(`rgba(0,0,${ValBlue})`)
  };
 
  return (
      
      <Circle 
      handleChange={handleMudarSlide}
      Value={ValBlue}
      BackGround={ColorBlue} />
       
 
   
  );
}
