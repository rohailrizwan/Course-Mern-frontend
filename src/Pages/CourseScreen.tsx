import React, { useEffect, useState } from 'react'
import CourseTable from '../Components/Table'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function CourseScreen() {
  const navigate = useNavigate()
  const [CourseData,SetCourseData]=useState<any>([])

  const fetchData = async () => {
    const  CourseData  = await axios.get('http://localhost:4000/course')
    SetCourseData(CourseData.data)
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <div className="container">
        <div className="py-5 ">
          <div className='d-flex justify-content-between align-items-center mb-5'>
            <h1 className='text-center'>Course List</h1>
            <button className='m-3' style={{ width: "120px", height: "50px" }} onClick={() => navigate('Addcourse')}>Add Course</button>
          </div>
          <CourseTable obj={CourseData}/>
        </div>
      </div>
    </div>
  )
}
