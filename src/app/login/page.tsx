'use client'
import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Image from 'next/image'
const onLogin = ()=>{
    console.log("logged in")
}
export default function Login (){
    const[user, setUser] = useState({
        username: null,
        password: null
    })
    return(
        <>
        <div className='flex flex-col items-center justify-center py-2 min-h-screen'>
            <Image src="/lock.png" width={50} height={50} alt='padlock-icon' />
            <TextField id="username" label="username" variant="outlined" value={user.username} className='m-4' onChange={(e) => setUser({...user, username: e.target.value})}/>
            <TextField id="password" label="password" variant="outlined" type='password' value={user.password} className='mb-4' onChange={(e)=> setUser({...user, password: e.target.value})}/>
            <Button disabled={!user.username || !user.password} id="submit-button" variant='outlined' onClick={onLogin}>login</Button>
        </div>
        </>
    )
}