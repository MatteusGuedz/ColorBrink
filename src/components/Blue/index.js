import React from 'react';

import Slider from '@material-ui/core/Slider';
import { Box, Circle } from './styles';

import { useValues } from '../../context/Values';



export default function Blue() {
  const {ValueBlue, setValueBlue} = useValues();
  const {ColorBlue, setColorBlue} = useValues();

 function handleMudarSlide(event, newValue){
    setValueBlue(newValue);
    setColorBlue(`#0000${ValueBlue}`)
  };



 
  return (
   
    <Box >
          <Circle  style={{background: ColorBlue}}>
  <h1>{ValueBlue}</h1>
          </Circle>
          
          <Slider
          min={10}
            max={99}
            value={typeof ValueBlue === 'number' ? ValueBlue : 0}
            onChange={handleMudarSlide}
            aria-labelledby="input-slider"
          />
      </Box>
   
  );
}


