import React from 'react'

function Random(props) {
  if(props.num<5)
  throw new Error('number less than 5');
  return (
    <h2>
      {props.num}
    </h2>
  )
}

export default Random