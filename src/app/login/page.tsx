'use client'
import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Image from 'next/image'
import axios from 'axios'
export default function Login (){
    interface user {
        username: string;
        password: string;
    }
    const[user, setUser] = useState<user>({
        username: '',
        password: ''
    })
    const onLogin = async ()=>{
        try {
            console.log(user)
            await axios.post('/api/users/login',user)
        } catch (err) {
            console.log(err)
        }
        console.log("logged in")
    }
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