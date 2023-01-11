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
                    const response = await axios.get(`https://p4mtg.herokuapp.com/api/cards/${id}`)
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
let a ='font-bold flex items-center'

console.log(card)
    return(
        (!card)?null:
        <div >
        <div class="justify-center flex" >
            <div class={`h-auto w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center`}>
             <img  src={card.imageUrl}></img>
             </div>
             <div class='border border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal'>
             <div class={`${a}`}>Name: {card.name}</div>
            {/* <div >Alias: {card.names}</div> */}
            {/* <div >Layout: {card.layout}</div> */}
            {/* <div class={`${a}`}>Mana cost: {card.cost}</div> */}
            <div class={`${a}`}>Converted Mana Cost: {card.cost}</div>
            <div class={`${a}`}>Colors: {card.colors}</div>
            <div class={`${a}`}>Color Identity: {card.colorIdentity}</div>
            {/* <div >Classification: {card.type}</div>
            <div >Class: {card.supertypes}</div> */}
            <div class={`${a}`}>Type: {card.type}</div>
            <div class={`${a}`}>Subtype: {card.subtype}</div>
            {/* <div >Rarity: {card.rarity}</div>
            <div >Text: {card.text}</div>
            <div >Power: {card.power}</div>
            <div >Toughness: {card.toughness}</div>
            <div >Id: {card.multiverseid}</div> */}
            </div>
            </div>
            <div class='static'>< Add card={card}/></div>
            <button class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>editCard()}>Edit Card</button>
        </div>
    )
}