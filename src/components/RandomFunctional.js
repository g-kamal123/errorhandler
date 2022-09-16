import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'

function RandomFunctional() {
    const[num,setNum] = useState(20)
    const handleError = useErrorHandler()
    const btnHandler =()=>{
    let num1 = Math.floor(Math.random()*21)
    if(num1===0) num1 += 1;
    try{
        if(num1<5)
        throw new Error('num less than 5')
        else setNum(num1)
    }
    catch(err){
        handleError(err)
    }
    }
  return (
    <div>
        <h2>Functional error boundary</h2>
        <button onClick={btnHandler}>Generate</button>
        <h2>{num}</h2>
    </div>
  )
}

export default RandomFunctional