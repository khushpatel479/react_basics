import React, { useContext } from 'react'
import Lay from './Lay'
import { context } from './context'
import { useLocation } from 'react-router-dom'
const Cart = () => {
  const{add ,Emj, cart} = useContext(context)
   return(<>
   {Emj.map((item)=>
   {
   if(cart[item.id]>0)
   {
      return(
        <>
      <h1>{item.name}</h1>
      </>)
   }
   })}
    </>
  )
}

export default Cart