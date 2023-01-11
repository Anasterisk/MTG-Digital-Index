import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Register (){

    const navigate = useNavigate()

    const intialState = {
        name:'',
        username: '',
        password: '',
    }
    const [form, setForm] = useState(intialState)

   

    const register = async(data) =>{
        try{
            const response = await axios.post(`https://p4mtg.herokuapp.com/api/users/register/`, data)
            return response.data
        } catch(error){
            throw error
        }
    }

    const handleChange = (e) =>{
        setForm({...form, [e.target.id]:e.target.value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        await register(form)
        setForm(intialState)
        navigate('/login')
    }

    const a='grid grid-cols-2 border-2'
    return(
        <div className='container mx-auto '>
            <form  class='inline-grid grid-rows-3' onSubmit={handleSubmit}>
                <div class={`${a}`}>
                <label> Name:</label>
                <input type='text' id='name' onChange ={handleChange} value={form.name}></input>
                </div>
                <div class={`${a}`}>
                <label> Username:</label>
                <input type='text' id='username' onChange ={handleChange} value={form.username}></input>
                </div>
                <div class={`${a}`}>
                <label> Password:</label>
                <input type='text' id='password' onChange ={handleChange} value={form.password}></input>
                </div>
                <button class="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
            </form>
        </div>
    )
}