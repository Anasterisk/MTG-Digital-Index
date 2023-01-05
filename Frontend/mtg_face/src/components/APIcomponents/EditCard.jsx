import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function EditCard (){
    const navigate = useNavigate();
    let {id} = useParams();
    const [card, setCard] = useState(null)
  
    useEffect(()=>{
        const getCard = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/cards/${id}`)
                    setCard(response.data)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };
    
            getCard()
        },[])
    return(
        <div></div>
    )
}