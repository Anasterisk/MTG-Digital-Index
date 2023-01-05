import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
export default function DeleteList (){
    const navigate = useNavigate() 
    let {id}= useParams()
    
    const deletelist = async()=>{
        try{
            const response = await axios.delete(`http://localhost:8000/api/lists/${id}`)
            return response.data
        }catch(error){
            throw error
        }
    }
    const submit = async()=>{
        await deletelist()
        navigate(`/`,{replace:true})
    }

    return (
        <div>
            <button onClick={()=>submit()}>Delete?</button>
        </div>
    )

}