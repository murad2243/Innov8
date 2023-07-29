import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import SpeechToText from './SpeechToText'

const MainRoute=()=>{
    return <div>
        <Routes>
   <Route path='/' element={<DashBoard/>}/>
   <Route path='/Interview' element={<SpeechToText/>}/>
    </Routes>
    </div>
}
export default MainRoute