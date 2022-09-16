import React from 'react'

function Fallback() {
    const try1 =()=>{
        window.location.reload()
    }
  return (
    <>
     <h2>Functional error boundary</h2>
    <h4>Something Went wrong!</h4>
    <button onClick={try1}>try again</button>
    </>
  )
}

export default Fallback