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
                const response = await axios.get(`http://localhost:8000/lists/${id}`)
                setList(response.data)
            } catch (error){
                throw error
            }
        };
        getList()
    },[])

    const goToCard =(x)=>{
        navigate(`/cards/${x.id}`)
    }

    console.log(list)
    return(
        (!list)?<div> Loading </div>:
        <div className="list">
            <div>Name:{list.name}</div>
            <div>Status:{list.status}</div>
            <div>Description:"{list.description}"</div>
            <div>cards: {list.quantity}/100</div>
            <div></div>
        </div>
    )
}