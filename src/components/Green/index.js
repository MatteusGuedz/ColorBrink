import React from 'react';

import Slider from '@material-ui/core/Slider';
import { Box, Circle} from './styles';

import { useValues } from '../../context/Values';




export default function Green() {
  const {ValueGreen, setValueGreen} = useValues();
  const {ColorGreen, setColorGreen} = useValues();

 function handleMudarSlide(event, newValue){
    setValueGreen(newValue);
    setColorGreen(`#00${ValueGreen}00`)
  };


 
  return (
   
    <Box >
          <Circle style={{background: ColorGreen}}>
  <h1>{ValueGreen}</h1>
          </Circle>
         
          <Slider
            max={99}
            min={10}
            value={typeof ValueGreen === 'number' ? ValueGreen : 0}
            onChange={handleMudarSlide}
            aria-labelledby="input-slider"
          />
      </Box>
   
  );
}


