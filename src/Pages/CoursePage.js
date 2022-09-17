import React from 'react'
import Navbar from '../Components/Navbar'
import { DiBootstrap,DiAngularSimple,DiGithubBadge,DiDatabase,DiNodejs,DiNpm } from "react-icons/di";
import "./CoursePage.css"

function CoursePage() {
  return (
    <div>
    <Navbar vis={false}/> 
    <div className='course-body'>
        <p className='title'>Welcome to freeCodeCamp.org</p>
        <p className='quote'>"I have not failed. I've just found 10,000 ways<br/> that wont work."</p>
        <p className='name'>~Thoman A Edison</p>
        <div className='courses'>
            <button className='Button'> <DiAngularSimple /> Angular  </button>
            <button className='Button'> <DiBootstrap /> Bootstrap  </button>
            <button className='Button'> <DiDatabase />  Database  </button>
            <button className='Button'> <DiGithubBadge /> GitHub </button>
            <button className='Button'> <DiNodejs /> NodeJs</button>
            <button className='Button'> <DiNpm /> NPM</button>
            

        </div>

    </div>

    </div>
  )
}

export default CoursePage