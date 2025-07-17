import React, { createContext, useState } from 'react'
import Child1 from './Child1';
import Chield2 from './Chield2';

export const themeContext = createContext();
export const dataContext = createContext();
function App() {
  const [theme, setTheme]= useState('light');
  const [data, setData] = useState([{
    name : "apple",
    type : "a1"
  },{
    name : "ball",
    type : "a2"
  },{
    name : "banna",
    type : "a3"
  },{
    name : "orange",
    type : "a4"
  },{
    name : "mango",
    type : "a5"
  }])
  return (
   <>
   <themeContext.Provider value={{theme, setTheme}}>
    <div className="container" style={{backgroundColor : theme==='light' ? 'beige' : 'black', height : '200px', width : '200px', border : '2px solid black', display : 'flex', flexDirection : 'column', justifyContent :'center', alignItems :'center'}}>
      <Child1 />
    </div>
   </themeContext.Provider>

   <dataContext.Provider value={{ data, setData}}>
    <Chield2 />
   </dataContext.Provider>
   </>
  )
}

export default App