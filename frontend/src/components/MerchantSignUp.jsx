import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MerchantSignUp = () => {
    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let [email,setEmail]=useState("")
    let [gst_number,setGstNumber]=useState("")
    let [password,setPassword]=useState("")
    let [repassword,setrePassword]=useState("")
    let data={name,phone,email,gst_number,password}
    let navigate=useNavigate()
  
    function action1(i){
        i.preventDefault()
        if(password===repassword){
            axios.post(`http://localhost:1729/merchants`,data)
            .then(
                (res)=>{
                    alert("details submited")
                    navigate("/MerchantSignUp")
                    
                }

            ).catch(
                (err)=>{
                    alert("details are present previously")
                    console.log(err);
                }
            )
        }else{
            alert("your reentered password is not match with password try again")
        }

    }


    return (
        <div className="MerchantSignUp">
            <div className="img9">
                <img src="https://cms.jotform.com/uploads/answers/answer/orbin/2052024_single-field-account-registration-form.gif" alt="" />
            </div>
            <div className="MerchantSignUpForm">
                <h1>Sign Up</h1>
                
            <form onSubmit={action1}>
                <label htmlFor="">Name</label>
                <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required/> 
                <label htmlFor="">Phone Number</label>
                <input placeholder="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" required/>
                <label htmlFor="">Email</label>
                <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required/>
                <label htmlFor="">GST number</label>
                <input placeholder="gst_number" value={gst_number} onChange={(e)=>{setGstNumber(e.target.value)}} type="text" required/>
                <label htmlFor="">Password</label>
                <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" required/>
                <label htmlFor="">Re-Password</label>
                <input placeholder="repassword" value={repassword} onChange={(e)=>{setrePassword(e.target.value)}} type="password" required/>
                <button>Sign up</button>
            </form>
            </div>
        </div>
     );
}
export default MerchantSignUp;