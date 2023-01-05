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
    const [form, setForm] = useState(card)

        
    const updateList = async (data)=>{
                try{
                    const response = await axios.post(`http://localhost:8000/api/list/${id}`, data)
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
        I am the Edit list
        <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type='text' id='name' placeholder={list.name} onChange ={handleChange} value={form.name}></input>
            <label> Status:</label>
            <input type='text' id='status' placeholder={card.status} onChange ={handleChange} value={form.status}></input>
            <label> Description:</label>
            <input type='text' id='description' placeholder={card.description} onChange ={handleChange} value={form.description}></input>
            <label> Cost:</label>
            <input type='number' id='cost' placeholder={card.cost} onChange ={handleChange} value={form.cost}></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}