import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Browse (){

    const navigate = useNavigate();
    // let {id} = useParams();
    const [cards, setCards] = useState(null)

    useEffect(()=>{
        const getCards = async ()=>{
                try{
                    const response = await axios.get(`http://api.magicthegathering.io/v1/cards?`)
                    setCards(response.data.cards)
                } catch (error){
                    throw error
                }
            };
    
            getCards()
        },[])
    
    const goToCard =(x)=>{
        navigate(`card/${x.multiverseid}`)
    }
console.log(cards)
    return(
        (!cards)? null:
        <div>
            <div>
                {cards.map((x)=>(
                    (!x.imageUrl)?null:
                    <img onClick={()=>goToCard(x)}src={x.imageUrl}></img>
                    // <div>{x.name}</div>
                ))}
            </div>
        </div>
    )
}