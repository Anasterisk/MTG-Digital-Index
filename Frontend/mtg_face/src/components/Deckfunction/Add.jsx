import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

//list_id=x&card_id=y
export default function Add(props){

    const [user, setUser] = useState(null)
    let id = 3
    let y = props.card.id
    const deckState = {
        deckValue: null,
        listId: null
    }
    let [deck, setDeck] = useState(deckState)
    useEffect(()=>{
        const getUser = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/users/${id}`)
                    setUser(response.data)
                } catch (error){
                    throw error
                }
            };
    
            getUser()
        },[])
    
        const addCard = async ()=>{
        try {
            const response = await axios.post(`http://localhost:8000/api/edit/add/list_id=${deck.listId}&card_id=${y}`)
        } catch (error){
            throw error
        }
    }
    const setValue = (e,i) =>{
        setDeck({deckValue:i, listId:e})
    }
    console.log(user)
    console.log(y)
    console.log(deck)
    return (
        (!user)? null:
        <div>
            <div>
            Decks:
            {user.owner.map((x,y)=>(
                <div onClick={()=>setValue(x.id,y)} value={x.id}> {x.name}</div>
            ))}
            </div>
            {(deck.listId==null)?null:
            <button>Add to {user.owner[deck.deckValue].name}?</button>}
            {(deck.listId==null)?null:<button onClick={()=>(setValue(null,null))}>Select a different Deck?</button>}
        </div>
    )
}