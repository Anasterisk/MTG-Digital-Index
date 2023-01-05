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
            const response = await axios.post(`http://localhost:8000/api/users/register`, data)
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

    return(
        <div>
            I am the register
            <form onSubmit={handleSubmit}>
                <label> Name:</label>
                <input type='text' id='name' onChange ={handleChange} value={form.name}></input>
                <label> Username:</label>
                <input type='text' id='username' onChange ={handleChange} value={form.username}></input>
                <label> Password:</label>
                <input type='text' id='password' onChange ={handleChange} value={form.password}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}