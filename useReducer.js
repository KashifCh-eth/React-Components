import React from 'react'
import { useReducer } from 'react'

const InitialState = 0;
const Reducer = (state, action) => {
      
    if (action.type === "INC") {
         return state + 1
    }
    if (action.type === "DEC") {
         return state - 1
     }
  
    return state;
    
}
function UseReduser() {

   let  [state , dispatch ]=  useReducer(Reducer, InitialState);

  return (
    <div>
          <p className='bg-info'>Hey Its Reducer</p>

          <div className='bg-dark m-auto'>
              <div>
                  <p>{state}</p>
                  <button onClick={()=> dispatch({type: "INC"})}>Incre</button>
                  <button onClick={()=> dispatch({type: "DEC"})}>Decer</button>
              </div>
          </div>
          
    </div>
  )
}

export default UseReduser
