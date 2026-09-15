import React from 'react'
import "./Adding.css";

const AddingText = ({text,id,AllF,togglePart,completed}) => {
  return (
    <div className='adding'>
      {
        text ? <span className='my-text' style={{textDecoration :completed ? "line-through":"none" }} onClick={() => togglePart(id)}>{text}</span> : ""
      }
       <button className='delete' onClick={() => AllF(id)}>delete</button>
    </div>
  )
}

export default AddingText
