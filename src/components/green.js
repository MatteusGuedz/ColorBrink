import React from 'react';
import Circle from './Circle'
import { useValues } from '../context/Values';

export default function Green() {
  const {ValGreen, setValGreen} = useValues();
  const {ColorGreen, setColorGreen} = useValues();

 function handleMudarSlide(event, newValue){
    setValGreen(newValue);
    setColorGreen(`rgba(0,${ValGreen},0)`)
  };

  return ( 
     <Circle 
      handleChange={handleMudarSlide}
      Value={ValGreen}
      BackGround={ColorGreen} />          
  );
}


