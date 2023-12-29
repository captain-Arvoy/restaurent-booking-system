'use client'
import {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Image from 'next/image'
import MultiValueSelector from '@/components/multiValueMenu'
const onSignup = ()=>{
    console.log("signed Up!")
}
export default function signUp (){
    interface user {
        email: string;
        password: string;
    }
    const[user, setUser] = useState<user>({
        email: '',
        password: ''
    })
    const [confirmPassword, setConfirmPassword] = useState('')
    return(
        <>
        <div className='flex flex-col items-center justify-center py-2 min-h-screen'>
            
            <Image 
                src="/lock.png" 
                width={50} 
                height={50} 
                alt='padlock-icon' />
            <TextField 
                id="email" 
                label="email" 
                variant="outlined" 
                value={user.email} 
                className='m-4' 
                onChange={(e) => setUser({...user, email: e.target.value})}/>
            <TextField 
                id="password" 
                label="password" 
                variant="outlined" 
                type='password' 
                value={user.password} 
                className='mb-4' 
                onChange={(e)=> setUser({...user, password: e.target.value})}/>
            <TextField 
                error={!( user.password === confirmPassword )} 
                id="confirmPassword" 
                label={!( user.password === confirmPassword )?"password do not match":"confirm password"} 
                variant="outlined" 
                type='password' 
                value={confirmPassword} 
                className='mb-4' 
                onChange={(e)=> setConfirmPassword(e.target.value)}/>
            <Button 
                disabled={(!user.email || !user.password) || !( user.password === confirmPassword )} 
                id="submit-button" 
                variant='outlined' 
                onClick={onSignup}>sign up</Button>
        </div>
        </>
    )
}