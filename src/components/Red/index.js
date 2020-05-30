import React from 'react';

import Slider from '@material-ui/core/Slider';
import { Box, Circle} from './styles';

import { useValues } from '../../context/Values';


export default function Red() {
  const {ValueRed, setValueRed} = useValues();
  const {ColorRed, setColorRed} = useValues();


 function handleMudarSlide(event, newValue){
    setValueRed(newValue);
    setColorRed(`#${ValueRed}0000`)
  };





 
  return (
   
    <Box >
          <Circle  style={{background: ColorRed, }}>
               <h1>{ValueRed}</h1>
            </Circle>         
          <Slider
          valueLabelDisplay="on"
          min={10}
            max={99}
            value={typeof ValueRed === 'number' ? ValueRed : 0}
            onChange={handleMudarSlide}
            aria-labelledby="input-slider"
          />
      </Box>
   
  );
}


