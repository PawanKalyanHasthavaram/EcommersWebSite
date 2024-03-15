import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [gender,setGender]=useState("")
    let [phone,setPhone]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [repassword,setrePassword]=useState("")
    let data={name,phone,email,password,age,gender}
    let navigate=useNavigate()
    function action1(i){
        i.preventDefault()
        if(password===repassword){
            axios.post(`http://localhost:1729/users`,data)
            .then(
                (res)=>{
                    navigate("/UserSignUp")
                    alert("details submited")
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
                <img src="https://cdn.dribbble.com/users/1429256/screenshots/4375902/february-2018-newsletter-header-anim3.gif" alt="" />
            </div>
            <div className="UserSignUpForm">
                <h1>Sign Up</h1>
                
            <form onSubmit={action1}>
                <input className="inp1" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required/> 
                <input className="inp1" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                <label htmlFor="">Male</label>
                <input value="Male" onChange={(e)=>setGender(e.target.value)} type="radio" name={gender}/>
                <label htmlFor="" >Female</label>
                <input value="Female" onChange={(e)=>setGender(e.target.value)} type="radio" name={gender}/>
                <input className="inp1" placeholder="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" required/>
                <input className="inp1" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required/>
                <input className="inp1" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" required/>
                <input className="inp1" placeholder="repassword" value={repassword} onChange={(e)=>{setrePassword(e.target.value)}} type="password" required/>
                <button>Sign up</button>
            </form>
            </div>
        </div>
     );
}
export default UserSignUp;