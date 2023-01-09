import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DataContext } from "../DataContext"
//list_id=x&card_id=y
export default function Add(props){
    
    const {userInfo, setUserInfo} = useContext(DataContext)
    const [user, setUser] = useState(null)
    let id = userInfo.id
    let y = props.card.id
    const deckState = {
        deckValue: null,
        listId: null
    }
    let [deck, setDeck] = useState(deckState)
    useEffect(()=>{
        const getUser = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/users/get/${id}`)
                    setUser(response.data)
                } catch (error){
                    throw error
                }
            };
    
            getUser()
        },[])
    
        const addCard = async ()=>{
        try {
            const response = await axios.post(`http://localhost:8000/api/edit/add?list_id=${deck.listId}&card_id=${y}`)
            return response.data
        } catch (error){
            throw error
        }
    } 
    const claimCard =()=>{
        addCard()
        setDeck(deckState)

    }
    const setValue = (e,i) =>{
        setDeck({deckValue:i, listId:e})
    }

   
    console.log(user)
    console.log(y)
    console.log(deck)
    return (
        (!user)? null:
            <div class='relative'>
            {(deck.listId!==null)? null:
            <div class='inline-flex items-center' >
            <button class=''>Add to Deck: </button>
            {user.owner.map((x,y)=>(
                <div class='hover:bg-blue-500 hover:text-white' onClick={()=>setValue(x.id,y)} value={x.id}> {x.name}</div>
            ))}
            </div>}
            {(deck.listId==null)?null:
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>claimCard()}>Add to {user.owner[deck.deckValue].name}?</button>}
            {(deck.listId==null)?null:
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>(setValue(null,null))}>Select a different Deck?</button>}
        </div>
    )
}