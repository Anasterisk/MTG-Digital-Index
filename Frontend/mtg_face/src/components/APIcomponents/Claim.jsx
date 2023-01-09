import axios from "axios"
import { useState, useEffect, useContext } from "react"




export default function Claim (props){
    const card = props.card
    const [user, setUser] = useState(useContext)
    
    const data = {
        name: card.name,
        type: card.supertypes,
        subtype: card.types,
        cost: card.cmc,
        colors: card.colors,
        colorIdentity: card.colorIdentity,
        uniqueId: card.multiverseid,
        imageUrl: card.imageUrl,
        basicLand:(card.supertypes=="Basic"&&card.types=="Land")? true:false
    }
            
    const claim = async(data) =>{
        try{
            const response = await axios.create(`http://localhost:8000/cards/`, data)
            return response.data
        } catch(error){
            throw error
        }
    }
    const handleSubmit = async (e)=>{
        await claim(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
            </form>
        </div>
    )
}