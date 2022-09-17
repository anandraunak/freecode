import React from 'react'
import Navbar from '../Components/Navbar'
import "./Login.css"

// function Login () {
//   return (
//     <div>
//         <Navbar vis={false} />
//         <div className='login-body'>
//           <p className='head'>Login / Sign-up</p>
//           <div className='inputs'>
//             <input className='username input-field' placeholder='Enter your Username' />
//             <input className='email input-field' placeholder='Enter your email' />
//             <input className='password input-field' placeholder='Enter the password' />
//           </div>
//           <button className='submit-button' >Submit</button>

//         </div>

//     </div>
//   )
// }

// export default Login 




import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    async function handleLogin(e) {
        e.preventDefault();
        try{
          let data = JSON.stringify({
            email: username,
            password: password
          });
            const createTask = await axios.post(`http://localhost:5000/user/signup`, data
           );
            localStorage.setItem("userToken", createTask.data.token);
            navigate("/course-page");
        }
        catch (e) {
            console.log(e);
            alert(e.message);
        }
        
    }
    if(localStorage.getItem('userToken') === null){
        return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    
                    <h2 className="mb-5 mt-5">Login</h2>
                    <form>
                        <div className="form-outline mb-4">
                            <input type="" id="form1Example1" className="form-control style-inp" placeholder="Username" onChange = {(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                            <input type="password" id="form1Example2" className="form-control style-inp" placeholder="Password" onChange = {(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" onClick = {handleLogin} className="btn btn-primary btn-block theme-color-fill w-100">Login</button>
                    </form>
                </div>
            </div>

        </div>);
    }
    else{
        navigate("/course-page");
        return(<div></div>);
    }
}
export default Login;