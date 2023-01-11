import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Remove (props){
const navigate = useNavigate()
let x=props.deck

    const removeFromDeck = async ()=>{
        try{
            const response = axios.delete(`https://p4mtg.herokuapp.com/api/edit/remove?list_id=${x.listId}&card_id=${x.cardId}`)
            return response.data
        }catch(error){
            throw error}
    }
    const submit = async()=>{
        await removeFromDeck()
        navigate(0)
    }

    return(
        <div>
            <button class="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>submit()}>Remove</button>
        </div>
    )
}