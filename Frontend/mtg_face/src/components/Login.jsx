import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "./DataContext"

export default function Login (){
    const navigate = useNavigate()

    const intialState = {
        username: '',
        password: '',
    }
    const [form, setForm] = useState(intialState)
    const [user, setUser] = useState(null)
    const {userInfo, setUserInfo} = useContext(DataContext)
        const login = async (data)=>{
                try{
                    const response = await axios.get(`https://p4mtg.herokuapp.com/api/users/login/bypass`, data )
                    setUser(response.data)
                    setUserInfo(response.data[0])
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
            navigate('/profile')
        }
    return(
        <div>
            <form class='border-2 inline-grid grid-cols-2'onSubmit={handleSubmit}>
                <label class='border-2'> Username:</label>
                <input type='text' id='username' onChange ={handleChange} value={form.username}></input>
                <label class='border-2'> Password:</label>
                <input type='text' id='password' onChange ={handleChange} value={form.password}></input>
                <button class="col-span-2 bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
            </form>
        </div>
    )
}