import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
const User = () => {
    let navigate=useNavigate()
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    function verify(e){
        e.preventDefault()
        if(email.includes('@')){
            axios.post(`http://localhost:1729/users/verify-by-email?email=${email}&password=${password}`)
        .then(
            (res)=>{
                
                localStorage.setItem("user",JSON.stringify(res.data.data))
                alert(res.data.message)
               
                navigate("/UserHome")
            }
        )
        .catch(
            (err)=>{
                console.log(err)
                alert(err.response.data.message)
            }
        )
        }else{
            axios.get(`http://localhost:1729/users/verify-by-phone?phone=${email}&password=${password}`)
                .then(
                    (res)=>{
                       
                        alert(res.data.message)
                        navigate("/UserHome")
                    }
                )
                .catch(
                    (err)=>{
                        console.log(err)
                        alert(err.response.data.message)
                    }
                )
        }
        
    }

    return ( 
        <div className="userLogin">
            <div className='title1'><h1>User Login</h1></div>
            <div className='div1'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" value={email} onChange={(i)=>setEmail(i.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(i)=>setPassword(i.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <button className='btn btn-primary mx-3' onClick={verify}>sign in</button>
                        <button className='btn btn-primary '><Link to="/UserSignUp">SignUp</Link></button>
                    </Form.Group>
                </Form>
            </div>
            <div>
                <img className='img8' src="https://assets-v2.lottiefiles.com/a/4bac5fc2-1167-11ee-8a4a-1779c9fbd7bf/Cpx8JAjE84.gif" alt="" />
            </div>
        </div>
     );
}
 
export default User;