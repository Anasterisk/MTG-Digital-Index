import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Remove from './Deckfunction/Remove'
import EditList from "./EditList"
export default function List (){
    const navigate = useNavigate();
    let {id}= useParams();
    let intialState = true
    const [list, setList] = useState(null)
    const [edit,setEdit] = useState(intialState)
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

    console.log(edit)
    return(
        (!list)?null:
        <div className="list">
            <button onClick={()=>(edit)?setEdit(false):setEdit(true)}>Edit</button>
            {(edit)?
            <EditList/>:
            <div>
            <div>Name:{list.name}</div>
            <div>Status:{list.status}</div>
            <div>Description:"{list.description}"</div>
            <div>cards: {list.deck.length}/100</div>
            </div>}
            {list.deck.map((x)=>(
                <div>
                    <img src={x.imageUrl}  ></img>
                    <div onClick={()=>goToCard(x)}>{x.name}</div>
                    <Remove deck={x.CardList}/>
                </div>
            ))}
            <div></div>
        </div>
    )
}