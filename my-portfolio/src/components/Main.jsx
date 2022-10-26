import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'

export default function Main () {
    return (
        <div className="main">

            <Routes>

                <Route exact path="/" element={<Home/>}/>

                <Route exact path="projects" element={<Projects/>}/>

                <Route exact path="resume" element={<Resume/>}/>

                <Route exact path="contact" element={<Contact/>}/>

            </Routes>

        </div>
    )
}