import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const User = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    function verify(e){
        e.preventDefault()
        
    }
    return ( 
        <div className="userLogin">
            <div className='title1'><h1>User Login</h1></div>
            <div className='div1'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <button className='btn btn-primary mx-3'>sign in</button>
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