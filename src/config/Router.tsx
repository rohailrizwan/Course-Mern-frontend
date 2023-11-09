import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import CourseScreen from '../Pages/CourseScreen'
import AddCourse from '../Pages/AddCourse'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
            <Route path='/*' element={<CourseScreen/>}/>
            <Route path='Addcourse' element={<AddCourse/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
