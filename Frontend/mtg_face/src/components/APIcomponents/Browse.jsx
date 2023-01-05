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
                    // const response = await axios.get(`http://api.magicthegathering.io/v1/cards?page=2`)
                    // setCards(response.data.cards)
                    console.log(response)
                } catch (error){
                    throw error
                }
            };
    
            getCards()
        },[])
    
    const goToCard =(x)=>{
        navigate(`card/${x.multiverseid}`)
    }
    const nextPage = ()=>{
        setPage(page+1)
    }
    // const previousPage = ()=>{
    //     if (page == 1){
    //         setPage(311)
    //     } else {
    //         setPage(page-1)
    //     }
    // }
console.log(cards)
    return(
        (!cards)? null:
        <div>
            <div>
                {cards.map((x)=>(
                    // (!x.imageUrl)?null:
                    <div>
                    <img onClick={()=>goToCard(x)}src={x.imageUrl}></img>
                    <div>{x.name}</div>
                    </div>
                ))}
            </div>
            {/* <button onClick={()=>previousPage()} >Previous Page</button> */}
            {/* <button onClick={()=>nextPage()}> Next Page</button> */}
        </div>
    )
}