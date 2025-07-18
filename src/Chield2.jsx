import React, { useContext, useState } from 'react'
import { dataContext } from './App';

function Chield2() {
    const {data, setData} = useContext(dataContext);
    const [key, setKeys] = useState([]);
    const [value, setValue] = useState([]);

    function handleKeys(){
       const allkey = data.map((k)=>Object.keys(k));
           setKeys(allkey);
    }
    function handleValues(){
        const allvalues = data.map((v)=>Object.values(v));
        setValue(allvalues);
    }
  return (
  <>
  <div style={{display :"flex", flexDirection : 'row', alignItems : 'center', justifyContent :'center', gap : '10px'}}>
    <div>{`The Keys are ${key.map((k)=>k)}`}</div>
        <button onClick={handleKeys}>Key's</button>

    <div>{`values are ${value.map((v)=>v)}`}</div>
        <button onClick={handleValues}>Value's</button>
        <button type="submit">this is my nect button</button>
        <p>this is git add for push</p>
                <button type="submit">this is my  button</button>


  </div>
  </>
  )
}

export default Chield2