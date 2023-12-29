"use client"
import { useState } from "react";
import Input from '@mui/material/Input'
import MenuSelector from '@/components/multiValueMenu'
import InputLabel from '@mui/material/InputLabel'
import FilledInput from '@mui/material/FilledInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import LoadingButton from '@mui/material/LoadingButton'
import axios from 'axios'
export default function ItemInputForm() {
    const handleSubmit = ()=>{
        const response = axios.post('/api/admin/insertFood',)
    }
    interface item {
        name: string;
        price: string;
        label: string;
    }
    const [submitState, setSubmitState] = useState<boolean>(false)
    const [foodDetail, setFoodDetail] = useState<item>({
        name: '',
        price: '',
        label: ''
    })
    return (
        <div className="flex flex-col min-h-screen items-center justify-center ">
            <form className='border border-gray-600 p-48 rounded flex flex-col gap-2'>
                <div><Input placeholder="Name of Food Item" id="food-name" value={foodDetail.name} onChange={(e) => setFoodDetail({...foodDetail,name: e.target.value})} /></div><br />
                <div><FormControl variant="filled" >
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                        value={foodDetail.price}
                        onChange={(e) => setFoodDetail({...foodDetail, price: e.target.value})}
                    />
                </FormControl></div>
                <div><MenuSelector /></div>
                <div>{ submitState?
                    (<LoadingButton loading variant="outlined">
                    Submit
                  </LoadingButton>):
                  <button type="submit" className="p-2 bg-gray-400 rounded" onSubmit={handleSubmit}>+ add item</button>}</div>
            </form>
        </div>
    );

}