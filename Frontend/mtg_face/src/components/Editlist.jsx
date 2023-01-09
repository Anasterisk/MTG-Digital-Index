import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function EditList (){
    const navigate = useNavigate();
    let {id} = useParams();
    const intialState = {
        name:'',
        status: '',
        description: '',
    }
    const [list, setList] = useState(intialState)
  
    
    useEffect(()=>{
        const getList = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/lists/${id}`)
                    setList(response.data)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };
    
            getList()
        },[])
  const [form, setForm] = useState(list)
        
    const updateList = async (data)=>{
                try{
                    const response = await axios.put(`http://localhost:8000/api/lists/${id}`, data)
                    setList(response.data)
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
            await updateList(form)
            setForm(intialState)
        }
    
    
        return(
        <div>
        <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type='text' id='name' placeholder={list.name} onChange ={handleChange} value={form.name}></input>
            <label> Status:</label>
            <input type='text' id='status' placeholder={list.status} onChange ={handleChange} value={form.status}></input>
            <label> Description:</label>
            <input type='text' id='description' placeholder={list.description} onChange ={handleChange} value={form.description}></input>

            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
        </form>
    </div>
    )
}