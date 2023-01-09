import Browse from './APIcomponents/Browse'
import CardDetails from './APIcomponents/CardDetails'
import SubmitCard from './APIcomponents/CreateCard'
import DeleteCard from './APIcomponents/DeleteCard'
import EditCard from './APIcomponents/EditCard'
import {Route, Routes} from 'react-router-dom'
export default function APILanding (){

    return(
        <div class='bg-gray-300'>
            <Routes>
                <Route path='/browse'           element = {<Browse/>}/>
                <Route path='/card/:id'         element = {<CardDetails/>}/>
                <Route path='/createcard'       element = {<SubmitCard/>}/>
                <Route path='/delete/:id'       element = {<DeleteCard/>}/>
                <Route path='/edit/:id'         element = {<EditCard/>}/>    
            </Routes>
        </div>
    )
}