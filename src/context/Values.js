import React , { createContext, useState, useContext} from 'react';

const ValuesContext = createContext();


export default  function ValuesProvider({children}){


  const [ValueRed, setValueRed] = useState(10);
  const [ColorRed, setColorRed ] = useState('#000000');


  const [ValueGreen, setValueGreen ] = useState(10);
  const [ColorGreen, setColorGreen ] = useState('#000000');

  const [ValueBlue, setValueBlue ] = useState(10);
  const [ColorBlue, setColorBlue ] = useState('#000000');

  const [Result, setResult] = useState(`#${ValueRed}${ValueGreen}${ValueBlue}`)
  


  return (
    <ValuesContext.Provider value={{   
       ValueRed,
       setValueRed,
       ColorRed, 
       setColorRed,


       ValueGreen,
       setValueGreen,
       ColorGreen, 
       setColorGreen,

       ValueBlue,
       setValueBlue,
       ColorBlue, 
       setColorBlue,

       Result,
       setResult

         

      }}>
       {children}
    </ValuesContext.Provider>
  )
}

export function useValues(){
  const context = useContext(ValuesContext);
  const {
     
    ValueRed,
    setValueRed,
    ColorRed, 
    setColorRed,

    ValueGreen,
    setValueGreen,
    ColorGreen, 
    setColorGreen,

    ValueBlue,
    setValueBlue,
    ColorBlue, 
    setColorBlue,

    Result,
    setResult

    

  } = context;

  
  
  return {
       
    ValueRed,
    setValueRed,
    ColorRed, 
    setColorRed,

    ValueGreen,
    setValueGreen,
    ColorGreen, 
    setColorGreen,

    ValueBlue,
    setValueBlue,
    ColorBlue, 
    setColorBlue,

     Result,
       setResult
  };
}