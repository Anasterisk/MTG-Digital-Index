import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Login (){
    const navigate = useNavigate()

    const intialState = {
        username: '',
        password: '',
    }
    const [form, setForm] = useState(intialState)
    const [user, setUser] = useState(null)
        const login = async (data)=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/users/login`, data )
                    setUser(response.data)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };

        const handleChange = (e) =>{
            setForm({...form, [e.target.id]:e.target.value})
        }
        const handleSubmit = async (e)=>{
            e.preventDefault()
            await login(form)
            // setForm(intialState)
        }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username:</label>
                <input type='text' id='username' onChange ={handleChange} value={form.username}></input>
                <label> Password:</label>
                <input type='text' id='password' onChange ={handleChange} value={form.password}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}