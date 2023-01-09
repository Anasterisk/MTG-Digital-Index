import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { DataContext } from "./DataContext";

export default function Profile (){
    const navigate = useNavigate();
    
    let {id} = useParams();
    const {userInfo, setUserInfo} = useContext(DataContext)
    const [user, setUser] = useState(null)
useEffect(()=>{
    const getUser = async ()=>{
            try{
                const response = await axios.get(`http://localhost:8000/api/users/get/${userInfo.id}`)
                setUser(response.data)
                
            } catch (error){
                throw error
            }
        };

        getUser()
    },[])
console.log(userInfo)
    const goToList = (x)=>{
        navigate(`/list/${x.id}`)
    }
    return(
        (!user)? null:
        <div>
            <div> Welcome to your profile account {user.name}</div>
            <p> Click on your deck to edit</p>
            <div > <button class='w-1/4 bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded'onClick={()=>(navigate(`create/${userInfo.id}`))}> Build a Deck</button> </div>
            <div class="inline-table w-1/4 bg-gray-300 shadow-xl">
                <div class='table-header-group bg-gray-400'>
                <div class='table-row'>
                <div class='table-cell'> Deck </div>

                <div class='table-cell'> Status </div>
                </div>
                </div>
                <div class="table-row-group">
                {user.owner.map((x)=>(
                    <div  class='table-row' onClick={()=>goToList(x)}>
                    <div class="table-cell">{x.name}</div>
                    <div class='table-cell'>{x.status}</div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}