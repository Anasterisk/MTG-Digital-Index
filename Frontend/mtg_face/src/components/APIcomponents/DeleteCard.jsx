import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
export default function DeleteCard (){
    const navigate = useNavigate() 
    let {id}= useParams()
    
    const deleteCard = async()=>{
        try{
            const response = await axios.delete(`https://p4mtg.herokuapp.com/api/cards/${id}`)
            return response.data
        }catch(error){
            throw error
        }
    }
    const submit = async()=>{
        await deleteCard()
        navigate(`/api/browse`,{replace:true})
    }

    return (
        <div>
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>submit()}>Delete?</button>
        </div>
    )

}