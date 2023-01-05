import Browse from './APIcomponents/Browse'
import CardDetails from './APIcomponents/CardDetails'
import SubmitCard from './APIcomponents/CreateCard'
import DeleteCard from './APIcomponents/DeleteCard'
import {Route, Routes} from 'react-router-dom'
export default function APILanding (){

    return(
        <div>
            I am the API portion
            <Routes>
                <Route path='/browse'           element = {<Browse/>}/>
                <Route path='/card/:id'         element = {<CardDetails/>}/>
                <Route path='/createcard'           element = {<SubmitCard/>}/>
                <Route path='/delete/:id'             element = {<DeleteCard/>}/>
            </Routes>
        </div>
    )
}