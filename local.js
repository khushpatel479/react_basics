export const setitems = (username , pass)=>
{
   localStorage.setItem(`user_${username}` , JSON.stringify({pass}))
}

export const lg =(uname)=>
{
    const lk = localStorage.getItem(`user_${uname}`)
    return lk ? JSON.parse(lk):null
}