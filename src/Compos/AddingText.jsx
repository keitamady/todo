import React from 'react'
import "./Adding.css";

const AddingText = ({text,id,AllF,togglePart,completed}) => {
  return (
    <div className='adding'>
      {
        text ? <span className='my-text' style={{textDecoration :completed ? "line-through":"none" }} onClick={() => togglePart(id)}>{text}</span> : ""
      }
       <span className='delete' onClick={() => AllF(id)}>delete</span>
    </div>
  )
}

export default AddingText
