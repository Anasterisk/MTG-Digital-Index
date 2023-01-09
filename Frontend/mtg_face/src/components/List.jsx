import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Remove from './Deckfunction/Remove'
import EditList from "./EditList"
export default function List (){
    const navigate = useNavigate();
    let {id}= useParams();
    let intialState = false
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
        <div >
            <button class='hover:bg-blue-400' onClick={()=>(edit)?setEdit(false):setEdit(true)}>Edit</button>
            {(edit)?
            <EditList/>:
            <div>
            <div>Name:{list.name}</div>
            <div>Status:{list.status}</div>
            <div>Description:"{list.description}"</div>
            <div>cards: {list.deck.length}/100</div>
            </div>}
            <div class='flex flex-row'>
            {list.deck.map((x)=>(
                <div class='group'>
                <div class='group-hover:drop-shadow-2xl border-2 padding-sm  rounded shadow-lg overflow '>
                    <div class='w-full ' onClick={()=>goToCard(x)}>
                    <img class='w-full rounded' src={x.imageUrl}  ></img>
                    </div>
                    <div class='group-hover:bg-green-700 hover:text-white bg-gray-300 font-bold rounded-t'>{x.name}</div>
                    <div class= 'group-hover:bg-green-700 bg-gray-300 rounded-b'><Remove deck={x.CardList}/></div>
                    </div>
                    </div>
                
                
            ))}
            </div>
        </div>
    )
}