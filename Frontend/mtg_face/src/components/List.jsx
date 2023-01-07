import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function List (){
    const navigate = useNavigate();
    let {id}= useParams();
    const [list, setList] = useState(null)

    useEffect(()=>{
        const getList = async () =>{
            try{
                const response = await axios.get(`http://localhost:8000/api/lists/${id}`)
                setList(response.data)
            } catch (error){
                throw error
            }
        };
        getList()
    },[])

    const goToCard =(x)=>{
        navigate(`/api/card/${x.id}`)
    }

    console.log(list)
    return(
        (!list)?null:
        <div className="list">
            <div>Name:{list.name}</div>
            <div>Status:{list.status}</div>
            <div>Description:"{list.description}"</div>
            <div>cards: {list.deck.length}/100</div>
            {list.deck.map((x)=>(
                <div>
                    <img src={x.imageUrl}  ></img>
                    <div onClick={()=>goToCard(x)}>{x.name}</div>
                </div>
            ))}
            <div></div>
        </div>
    )
}