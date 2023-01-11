import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

export default function CreateCard (){

    const navigate = useNavigate()
    let {id}= useParams()

    const intialState = {
        name:'',
        type: '',
        subtype: '',
        cost: 0,
        colors: '', 
        colorIdentity: '',
        uniqueId: '',
        imageUrl: '',
        basicLand:false
    }
    const [form, setForm] = useState(intialState)

   

    const submitCard = async(data) =>{
        try{
            const response = await axios.post(`https://p4mtg.herokuapp.com/api/cards/submit`, data)
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
        await submitCard(form)
        setForm(intialState)
        navigate('/api/browse')
    }

    return(
        <div>
            I am the register
            <form onSubmit={handleSubmit}>
                <label> Name:</label>
                <input type='text' id='name' onChange ={handleChange} value={form.name}></input>
                <label> Type:</label>
                <input type='text' id='type' onChange ={handleChange} value={form.type}></input>
                <label> Subtype:</label>
                <input type='text' id='subtype' onChange ={handleChange} value={form.subtype}></input>
                <label> Cost:</label>
                <input type='number' id='cost' onChange ={handleChange} value={form.cost}></input>
                <label> Colors:</label>
                <input type='text' id='colors' onChange ={handleChange} value={form.colors}></input>
                <label> Color Identity:</label>
                <input type='text' id='colorIdentity' onChange ={handleChange} value={form.colorIdentity}></input>
                <label> UniqueId:</label>
                <input type='text' id='uniqueId' onChange ={handleChange} value={form.uniqueId}></input>
                <label> ImageUrl:</label>
                <input type='text' id='imageUrl' onChange ={handleChange} value={form.imageUrl}></input>
                <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
            </form>
        </div>
    )
}