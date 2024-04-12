import axios from "axios";
import { useEffect, useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


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
        <div className="updateMerchant">
        <h1>Profile update</h1>
          <form onSubmit={update}>
            <FloatingLabel controlId="floatingPassword" label="Name">
            <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Phone Number">
            <Form.Control type="number" placeholder="Phone Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}} required/>
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingPassword" label="Email Address">
            <Form.Control type="email" placeholder="Email Address" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
          </FloatingLabel>
          
          <FloatingLabel controlId="floatingPassword" label="GST Number">
            <Form.Control type="text" placeholder="GST Number" value={gst_number} onChange={(e)=>{setGstNumber(e.target.value)}} required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="text" placeholder="" value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
          </FloatingLabel>
          <button>Update</button>
          </form>
          
        </div>
      );
    
    // return ( 
    //     <div className="merchantUpdate">
    //     <form onSubmit={update}>
    //             <input placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required/> 
    //             <input placeholder="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} type="tel" required/>
    //             <input placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required/>
    //             <input placeholder="gst_number" value={gst_number} onChange={(e)=>{setGstNumber(e.target.value)}} type="text" required/>
    //             <input placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="text" required/>
    //             <button>Update</button>
    //         </form>

    //     </div>
    //  );
}
 
export default MerchantUpdate;