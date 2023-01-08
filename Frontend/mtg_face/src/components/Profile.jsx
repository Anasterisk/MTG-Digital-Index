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
            <div>{user.name}'s Page</div>
            <div> <button onClick={()=>(navigate(`create/${userInfo.id}`))}> Build a Deck</button> </div>
            <div>
                {user.owner.map((x)=>(
                    <div onClick={()=>goToList(x)}>
                    <div>{x.name}</div>
                    <div>{x.status}</div>
                    </div>
                ))}
            </div>
        
        </div>
    )
}