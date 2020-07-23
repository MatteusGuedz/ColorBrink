
import React from 'react';

import Slider from '@material-ui/core/Slider';
import { Box, Circle } from './styles';



export default function CCircle({BackGround, Value, handleChange}) {

  return (
   
    <Box >
          <Circle  style={{background: BackGround}}>
            <h1>{Value}</h1>
          </Circle>
          
          <Slider
            min={0}
            max={255}
            value={typeof Value === 'number' ? Value : 0}
            onChange={handleChange}
            aria-labelledby="input-slider" />
      </Box>
   
  );
}


