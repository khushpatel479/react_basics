import React, { useCallback, useEffect, useState } from 'react'
import Lay from './Lay'
import { useNavigate } from 'react-router-dom'
import { setitems , lg } from './local'
const Form = () => {
    const[name,setname] = useState("")
    const[email,setemail] = useState("")
    const[pass,setpass] = useState("")
    const[s1,sets1] = useState("")
    const[s2,sets2] = useState("")
    

    const[m1 , setm1]=useState("")
    const[m2 , setm2]=useState("")
    const[sub,setsub]=useState([])
    const ser = ()=>
    {
        setitems(name,email)
        alert("REGISTERED")
    }
    const lr = ()=>
    {
       let um = lg(name)
       if(um && um.pass===email)
       {
        alert("ok")
       }
    }
    useEffect(()=>
        {
            let s1 = document.querySelector("#sl1")
            let s2 = document.querySelector("#sl2")
        
            const store = [
                {INDIA : ["GUJARAT" , "GOA" , "MAHARASHTRA"],
            AMERICA : ["TEXAS" , "LOS ANGLES" , "CAROLAINA"]}
            ]
        
            let curr = 0
            let obj = store[curr]
        
            function load()
            {
                s1.innerHTML = ""
                let km = Object.keys(obj)
                km.forEach((item,index)=>
                {   
                    let op = document.createElement("option")
                    op.innerHTML = item
                    op.value = item
                    // s1.addEventListener("onChange" , change())
                    s1.appendChild(op)
                })
               
            }
            load()
         s1.addEventListener("click" , (e)=>
        {
            s2.innerHTML = ""
            let val = e.target.value
            let u = obj[val]
            u.forEach((item)=>
            {
                let op = document.createElement("option")
                op.innerHTML = item
                op.value = item
                s2.appendChild(op)
            })

        })
          
          
        
        })



const sname = (e)=>
{
    setname(e.target.value)
    let val = e.target.value
    console.log(val)
    if(val.length==0)
{
    setm1(<p style={{color:"red"}}>NAME IS EMPTY</p>)
}
if(val.length>10)
{
    setm1(<p style={{color:"red"}}>NAME CAN'T BE GREATER THAN 10</p>)
}
if(val.length>0 && val.length<=10)
{
    setm1(<p style={{color:"green"}}>NAME IS CORRECT</p>)
}
    
}

const semail = (e)=>
{
    setemail(e.target.value)
    let val = e.target.value
    if(val.includes("@") && val.includes(".com"))
    {
        setm2(<p style={{color:"green"}}>EMAIL IS CORRECT</p>)
    }
    else
    {
        setm2(<p style={{color:"red"}}>EMAIL IS NOT CORRECT</p>)
    }
}

const sp1 = (e)=>
{
    sets1(e.target.value)
    let val = e.target.value
}

const sp2 = (e)=>
    {
        sets2(e.target.value)
        let val = e.target.value
        
    }

let use = useNavigate()    
const sun = ()=>
{

    let hn = {name,email,s1,s2}
    use("/sub",{state:hn})
    
}
  return (
    <>
        <div>
        <Lay/>
            <label>ENTER THE NAME : </label><input type='text' onChange={sname} placeholder='Enter the name' value={name} id='name'/>
            <br/>{m1}
            <label>ENTER THE EMAIL : </label><input type='text' onChange={semail} placeholder='Enter the email' value={email} id='email'/>
            <br/>{m2}
            <label>ENTER THE PASSWORD : </label><input type='password' placeholder='Enter the password' value={pass} id='pass'/>
            <br/>

            <select id='sl1' onChange={sp1}></select>
            <select id='sl2' onChange={sp2}></select>
    <button onClick={()=>{sun()}}>Submit</button>
    <br/>
    <button onClick={()=>{ser()}}>REGISTER</button>
    <button onClick={()=>lr()}>LOGIN</button>
        </div>
    </>
  )
}

export default Form