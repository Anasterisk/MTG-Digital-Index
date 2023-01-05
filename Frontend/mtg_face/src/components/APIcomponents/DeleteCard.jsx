import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
export default function DeleteCard (){
    const navigate = useNavigate() 
    let {id}= useParams()
    
    const deleteCard = async()=>{
        try{
            const response = await axios.delete(`http://localhost:8000/api/cards/${id}`)
            return response.data
        }catch(error){
            throw error
        }
    }
    const submit = async()=>{
        await deleteCard()
        navigate(`/api`,{replace:true})
    }

    return (
        <div>
            <button onClick={()=>submit()}>Delete?</button>
        </div>
    )

}