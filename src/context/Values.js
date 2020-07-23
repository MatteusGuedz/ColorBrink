import React , { createContext, useState, useContext} from 'react';

const ValuesContext = createContext();

export default  function ValuesProvider({children}){

  const [ValRed, setValRed] = useState(0);
  const [ColorRed, setColorRed ] = useState('rgba(0,0,0)');

  const [ValGreen, setValGreen ] = useState(0);
  const [ColorGreen, setColorGreen ] = useState('rgba(0,0,0)');

  const [ValBlue, setValBlue ] = useState(0);
  const [ColorBlue, setColorBlue ] = useState('rgba(0,0,0)');

  const [Result, setResult] = useState(`#${ValRed}${ValGreen}${ValBlue}`)
  

const AllV = {
       ValRed,
       setValRed,
       ColorRed, 
       setColorRed,


       ValGreen,
       setValGreen,
       ColorGreen, 
       setColorGreen,

       ValBlue,
       setValBlue,
       ColorBlue, 
       setColorBlue,

       Result,
       setResult
}
  return (
    <ValuesContext.Provider value={{ ...AllV }}>
       {children}
    </ValuesContext.Provider>
  )
}

export function useValues(){
  const context = useContext(ValuesContext);
  const {...AllV } = context;
  return { ...AllV };
}