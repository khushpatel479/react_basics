import { createContext, useEffect, useState } from "react";
import Emj from "./items";
export const context = createContext(null)
const Context = (props)=>
{
    const[cart , setcart] = useState({})
    const add=(id)=>
    {
        if(!cart[id])
            {
                setcart((prev)=>({...prev,[id]:1}))
            }
            else
            {
                setcart((prev)=>({...prev,[id]:prev[id]+1}))
            }
    }

    useEffect(()=>
    {
        console.log(cart)
    })

    const cn = {add,Emj,cart}
    return(<context.Provider value={cn}>{props.children}</context.Provider>)
}
export default Context