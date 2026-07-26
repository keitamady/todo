import React, { useState } from 'react'
import AddingText from './AddingText';
import "./TextPart.css"

const TextPart = () => {
    const [myText, setMytext] = useState("");
    const [myNumber, setMyNumber] = useState(0)
    const [theFilter, setFilter] = useState("All")
    const [myArr, setMyArr] = useState([]);
    const ArrFunction = () => {
        setMyArr([...myArr,{id: myNumber,completed: false, text: myText}]);
        setMytext("");    
    }
    const changeNumber = () => {
        setMyNumber(prev => prev + 1)
    }
    const removeItems = (id) => {
        setMyArr(myArr.filter((item) => item.id !== id ))
    }
    const toggleItems = (id) =>{
        setMyArr(myArr.map((item) => {
           return item.id === id ? {...item,completed: !item.completed} : item
        }))
    }
    const myFilter = myArr.filter((todo) => {
        if(theFilter === "active"){
          return !todo.completed
        }
        if(theFilter === "completed"){
          return todo.completed
        }

        return true
    })
  const removeAll = () => {
    setMyArr(myArr.filter((remove) => {
        return !remove.text
    }))
  }


  return (
   <div className="text">
     <div className="inputs">
        <input onChange={(es) => setMytext(es.target.value) } value={myText} type="text" />
        <span  style={{color:"white"}} onClick={()=> { ArrFunction() ; changeNumber()}}>add tasks </span>
     </div>
      <div className="content">
             {
            myFilter.map((items) =>
             items.text ? <AddingText key={items.id} {...items} AllF = {removeItems} togglePart = {toggleItems}/>:""     
          )
        }
      </div>
         <div className='buttons'>
            <span onClick={() => setFilter("completed")} className='completed'>completed</span>
            <span onClick={() => setFilter("active")} className='active'>active</span>
            <span onClick={() => setFilter("All")}> showAll </span>
            <span onClick={() => removeAll()}> removeAll</span>
        </div> 
       
   </div>
  )
}

export default TextPart
