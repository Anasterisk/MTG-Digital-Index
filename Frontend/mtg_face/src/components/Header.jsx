import { Link} from "react-router-dom";

export default function Header (){
let border = " bg-gray-400 text-white font-bold py-2 px-4"
    return(
        <div className=" bg-gray-300 grid grid-flow-row grid-cols-3 ...">
            <div className=" col-span-2 flex-inline 
            text-5xl text-center">
                MTG Deck Builder
            </div>
        <div className="  flex flex-row... justify-end  space-x-1 text-xs text-bottom">

            <div className={`${border} hover:bg-black`}>
                <Link to="Register" onClick={(e)=>{}}>Register</Link> </div>
            <div className={`${border} hover:bg-red-700`}>
                <Link to="Login" onClick={(e)=>{}}>Login</Link></div>
            <div className={`${border} hover:bg-gray-200 hover:text-black`}>
                <Link to="Profile" onClick={(e)=>{}}>Profile</Link></div>
            <div className={`${border} hover:bg-green-700`}>
                <Link to="api/browse" onClick={(e)=>{}}>View Cards</Link></div>
            <div className={`${border} hover:bg-blue-700`}>
                <Link to="api/CreateCard" onClick={(e)=>{}}>Create a Card</Link></div>
        </div>
        </div>
    )
}