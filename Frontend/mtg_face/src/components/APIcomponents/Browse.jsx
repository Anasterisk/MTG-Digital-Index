import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Browse (){

    const navigate = useNavigate();
    // let {id} = useParams();
    const intialPage = 1
    const [cards, setCards] = useState(null)
    const [page, setPage] = useState(intialPage) 
    

    useEffect(()=>{
        const getCards = async ()=>{
                try{
                    const response = await axios.get(`http://localhost:8000/api/cards`)
                    setCards(response.data)
                    // const response = await axios.get(`http://api.magicthegathering.io/v1/cards?page`)
                    // setCards(response.data.cards)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };
    
            getCards()
        },[])
    
    const goToCard =(x)=>{
        navigate(`/api/card/${x.id}`)
    }

console.log(cards)
    return(
        (!cards)? null:
        <div>
            <div>
                {cards.map((x)=>(
                    <div onClick={()=>goToCard(x)}>
                    <img src={x.imageUrl}></img>
                    <div>{x.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}