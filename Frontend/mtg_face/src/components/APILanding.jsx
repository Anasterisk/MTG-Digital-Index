import Browse from './APIcomponents/Browse'
import CardDetails from './APIcomponents/CardDetails'

import {Route, Routes} from 'react-router-dom'
export default function APILanding (){

    return(
        <div>
            I am the API portion
            <Routes>
                <Route path='/browse'           element = {<Browse/>}/>
                <Route path='/card/:id'         element = {<CardDetails/>}/>
            </Routes>
        </div>
    )
}