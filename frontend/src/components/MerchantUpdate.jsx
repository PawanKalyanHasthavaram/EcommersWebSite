import axios from "axios";
import { useEffect, useState } from "react";

const MerchantUpdate = () => {
    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let [email,setEmail]=useState("")
    let [gst_number,setGstNumber]=useState("")
    let [password,setPassword]=useState("")

    
    
    let merchant=JSON.parse(localStorage.getItem("merchant"))
    let id=merchant.id
    let data={id,name,phone,email,gst_number,password}

    useEffect(
        ()=>{
            setName(merchant.name)
            setEmail(merchant.email)
            setGstNumber(merchant.gst_number)
            setPhone(merchant.phone)
            setPassword(merchant.password)
        },[]
    )
    let update=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:1729/merchants`,data)
        .then(
            (res)=>{
                alert('data updated')
            }

        ).catch(
            (err)=>{
            alert('data not updated')
        })
    }
    
    return ( 
        <div>
        <form onSubmit={update}>
                <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required/> 
                <input placeholder="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" required/>
                <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required/>
                <input placeholder="gst_number" value={gst_number} onChange={(e)=>{setGstNumber(e.target.value)}} type="text" required/>
                <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" required/>
                <button>Update</button>
            </form>

        </div>
     );
}
 
export default MerchantUpdate;