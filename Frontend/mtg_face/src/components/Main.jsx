import Register from './Register'
import Profile from './Profile'
import Landing from './Landing'
import List from './List'
import Createlist from './CreateList'
import EditList from './EditList'
import DeleteList from './DeleteList'
import APILanding from './APILanding'
import Login from './Login'

import {Route, Routes} from 'react-router-dom'
export default function Main (){

    
    return(
        <div>
            <div className='bg-gray-300 bg-med m-2 p-2 border-b-2 border-highlight cursor-pointer shadow-md.'></div>
            <Routes>
                <Route path='/'             element = {<Landing/>}/>
                <Route path='/register'     element = {<Register/>}/>
                <Route path='/login'        element = {<Login/>}/>
                <Route path='/profile/'  element = {<Profile/>}/>
                
                <Route path='/list/:id'     element = {<List/>}/>
                <Route path='/profile/create/:id' element = {<Createlist/>}/>
                <Route path='/list/edit/:id' element = {<EditList/>}/>
                <Route path='/list/delete/:id' element = {<DeleteList/>}/>

                <Route path='/api/*'        element = {<APILanding/>}/>
            </Routes>
        </div>
    )
}