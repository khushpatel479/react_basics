import React, { useContext, useState } from 'react'
import Emj from "./items"
import Lay from './Lay'
import { context } from './context'
import "./style.css"
import { useNavigate } from 'react-router-dom'
const Shop = () => {
    // const[cart , setcart] = useState([])
    const{add,cart} = useContext(context)
    let use = useNavigate()
  
    // const add =(e)=>
    // {
    //     let y = e
    //     setcart(prev=>[...prev,y])
    //     console.log(cart)
    // }
    // let cn = cart.length
    const cr = ()=>
    {
        
        use("/cart")
    }
  return (
    <>
    <Lay/>
    <div className='d1'>
    {Emj.map((item)=>
    {
        return(<div className='d2'>
        <h2 className='nm'>{item.pic}</h2>
            <h3>{item.name}</h3>
            <p>{item.dec}</p>
            <button onClick={()=>add(item.id)}>+</button>
            <span></span>
        </div>)
    })}
    
    </div>
    <button onClick={cr}>CART</button>
    </>
  )
}

export default Shop