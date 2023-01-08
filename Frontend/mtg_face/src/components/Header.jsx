import { Link} from "react-router-dom";

export default function Header (){

    return(
        <div>
            <div><Link to="Register" onClick={(e)=>{}}>Register</Link> </div>
            <div><Link to="Login" onClick={(e)=>{}}>Login</Link></div>
            <div><Link to="Profile" onClick={(e)=>{}}>Profile</Link></div>
            <div><Link to="api/browse" onClick={(e)=>{}}>View Cards</Link></div>
            <div><Link to="api/CreateCard" onClick={(e)=>{}}>Create a Card</Link></div>
        </div>
    )
}