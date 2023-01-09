import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Claim from "./Claim";
import DeleteCard from "./DeleteCard";
import Add from "../Deckfunction/Add"
export default function CardDetails (){
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


const editCard = ()=>{
    navigate(`/api/edit/${id}`,{replace:true})
}

console.log(card)
    return(
        (!card)?null:
        <div>
        <div>
            I am the Details page
            <div>Name: {card.name}</div>
            <img src={card.imageUrl}></img>
            {/* <div>Alias: {card.names}</div> */}
            {/* <div>Layout: {card.layout}</div> */}
            <div>Mana cost: {card.manaCost}</div>
            <div>Converted Mana Cost: {card.cmc}</div>
            <div>Colors {card.colors}</div>
            <div>Color Identity {card.colorIdentity}</div>
            {/* <div>Classification: {card.type}</div>
            <div>Class: {card.supertypes}</div> */}
            <div>Type: {card.type}</div>
            <div>Subtype: {card.subtype}</div>
            {/* <div>Rarity: {card.rarity}</div>
            <div>Text: {card.text}</div>
            <div>Power: {card.power}</div>
            <div>Toughness: {card.toughness}</div>
            <div>Id: {card.multiverseid}</div> */}
            </div>
            <Add card={card}/>
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>editCard()}>Edit Card</button>
        </div>
    )
}