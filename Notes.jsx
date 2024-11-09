import React, { useState } from 'react'
import Lay from './Lay'
import "./style.css"
const Notes = () => {
    const[title , settitle] = useState("")
    const[note , setnote] = useState("")
    const[sub , setsub] = useState([])
    const[sub1 , setsub1] = useState([])

    const t1 = (e)=>
    {
        settitle(e.target.value)
    }
    const t2 = (e)=>
    {
        setnote(e.target.value)
    }

    const sun = ()=>
    {
      let newsub = {tile:title , note:note}
      setsub([...sub,newsub])
      console.log(sub)
    }


  return (
    <>
        <Lay/>
        <div>
       <label>ENTER THE TITLE : </label> <input type='text' onChange={t1} value={title} placeholder='ENTER THE TITLE'/>
       <br/>
       <label>ENTER THE NOTES : </label> <input type='text' onChange={t2} value={note} placeholder='ENTER THE NOTES'/>
       <button onClick={()=>sun()} >+</button>
       </div>
       <div className='main'>
       {sub.map((item)=>
       {
        return(
          <div className='card'>
        <h3 className='title'>{item.tile}</h3>
        <p className='nt'>{item.note}</p>
        </div>)
       })}
       </div>

      
    </>
  )
}

export default Notes