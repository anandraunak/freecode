import React from 'react'
import Navbar from '../Components/Navbar'
import "./Home.css";
import { BsSpotify,BsGoogle,BsMicrosoft} from "react-icons/bs";
import {AiOutlineAmazon,AiFillApple} from "react-icons/ai";
import {useNavigate} from "react-router"

function Home() {
  function check() {
    if (localStorage.getItem("profile")) {
      const t = JSON.parse(localStorage.getItem("profile")).token;
        if(t!==null){return true;}
        
    }
    return false;
  }
  const navigate=useNavigate();
  return (
    <div>
        <Navbar vis={true} />
        <div className='home-body'>
          <p className='heading'>Learn to code for free</p>
          <p className='heading'>Build projects</p>
          <p className='heading'>Earn certification</p>
          <p>since 2014,more than 40,000 freecodecamp.org graduates have gotten jobs at tech companies including</p>
          <div className='icons'>
            <AiFillApple className='icon' />
            <BsGoogle className='icon' />
            <BsMicrosoft className='icon' />
            <BsSpotify className='icon' />
            <AiOutlineAmazon className='icon' />
            
          </div>
          <button className='button' onClick={()=>{ console.log(check()); check() ? navigate("/home"):navigate("/login")}}>Get started its free</button>

            

        </div>


    </div>
  )
}

export default Home