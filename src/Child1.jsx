import React, { useContext } from 'react'
import { themeContext } from './App'   // <-- import the exported context

function Child1() {
  const {theme, setTheme} = useContext(themeContext)

  function handleClick(){
    if(theme==='light')
        setTheme('dark')
    else
        setTheme('light')
  }
  return (
   <>
   <button onClick={handleClick}>
     Change my effect on child 1
   </button>
   
   </>
  )
}
export default Child1