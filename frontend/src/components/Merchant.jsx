import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
const Merchant = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()
    function verifyMerchant(e){
        e.preventDefault();
        if(email.includes('@')){
            axios.post(`http://localhost:1729/merchants/verify-by-email?email=${email}&password=${password}`)
        .then(
            (res)=>{
                
                localStorage.setItem("merchant",JSON.stringify(res.data.data))
                alert(res.data.message)
               
                navigate("/MerchantHome")
            }
        )
        .catch(
            (err)=>{
                console.log(err)
                alert(err.response.data.message)
            }
        )
        }else{
            axios.get(`http://localhost:1729/merchants/verify-by-phone?phone=${email}&password=${password}`)
                .then(
                    (res)=>{
                       
                        alert(res.data.message)
                        navigate("/MerchantHome")
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
        <div className="merchantLogin">
            <div className='title1'><h1>Merchant Login</h1></div>
            <div>
                <img className='img8' src="https://assets-v2.lottiefiles.com/a/4bf3bbba-1167-11ee-8a8e-175bda463efb/HK55Smih7x.gif" alt="" />
            </div>
            <div className='div1'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email/Phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <button className='btn btn-primary mx-3' onClick={verifyMerchant}>sign in</button>
                        <button className='btn btn-primary '><Link to="/merchantSignUp">sign up</Link></button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );

}

export default Merchant;