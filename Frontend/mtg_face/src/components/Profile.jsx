import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Profile (){
    const navigate = useNavigate();
    let {id} = useParams();
    const [user, setUser] = useState(null)
        
useEffect(()=>{
    const getUser = async ()=>{
            try{
                const response = await axios.get(`http://localhost:8000/users/${id}`)
                setUser(response.data)
            } catch (error){
                throw error
            }
        };

        getUser()
    },[])

    const goToList = (x)=>{
        navigate(`/lists/${x.id}`)
    }
console.log(user)
    return(
        (!user)? <div>Please Wait, Loading</div>:
        <div>
            <div>{user.name}'s Page</div>
            <div>
                {user.lists.map((x)=>(
                    <div onclick={()=>goToList(x)}>
                    <div>{x.name}</div>
                    <div>{x.status}</div>
                    </div>
                ))}
            </div>
        
        </div>
    )
}