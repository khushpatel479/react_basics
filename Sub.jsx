import React from 'react'
import { useLocation } from 'react-router-dom'

const Sub = () => {
    const location = useLocation()
    const {name , email , s1 , s2 } = location.state||{}
  return (
    <>
<h1>name : {name} </h1>
    </>
  )
}

export default Sub