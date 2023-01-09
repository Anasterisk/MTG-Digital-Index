import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function EditCard (){
    const navigate = useNavigate();
    let {id} = useParams();
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
    const [card, setCard] = useState(intialState)
    const [form, setForm] = useState(card)
    
    useEffect(()=>{
        const getCard = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/cards/${id}`)
                    setForm(response.data)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };
    
            getCard()
        },[])

        
    const updateCard = async (data)=>{
                try{
                    const response = await axios.put(`http://localhost:8000/api/cards/edit/${id}`, data)
                    setCard(response.data)
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
            await updateCard(form)
            navigate(`/api/card/${form.id}`)
        }
    
        const deleteCard = ()=>{
            navigate(`/api/delete/${id}/`,{replace:true})
        }


        return(
        <div>
        <button onClick={()=>deleteCard()}>Delete?</button>
        <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type='text' id='name' placeholder={card.name} onChange ={handleChange} value={form.name}></input>
            <label> Type:</label>
            <input type='text' id='type' placeholder={card.type} onChange ={handleChange} value={form.type}></input>
            <label> Subtype:</label>
            <input type='text' id='subtype' placeholder={card.subtype} onChange ={handleChange} value={form.subtype}></input>
            <label> Cost:</label>
            <input type='number' id='cost' placeholder={card.cost} onChange ={handleChange} value={form.cost}></input>
            <label> Colors:</label>
            <input type='text' id='colors' placeholder={card.colors} onChange ={handleChange} value={form.colors}></input>
            <label> Color Identity:</label>
            <input type='text' id='colorIdentity' placeholder={card.colorIdentity} onChange ={handleChange} value={form.colorIdentity}></input>
            <label> UniqueId:</label>
            <input type='text' id='uniqueId' placeholder={card.uniqueId} onChange ={handleChange} value={form.uniqueId}></input>
            <label> ImageUrl:</label>
            <input type='text' id='imageUrl' placeholder={card.imageUrl} onChange ={handleChange} value={form.imageUrl}></input>
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
        </form>
    </div>
    )
}