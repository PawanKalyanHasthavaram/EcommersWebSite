import axios from "axios";
import { useState } from "react";
import { json } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const AddProduct = () => {
    let [name,setName]=useState("")
    let [brand,setBrand]=useState("")
    let [category,setCategory]=useState("")
    let [cost,setCost]=useState("")
    let [image_Url,setImage_Url]=useState("")
    let [description,setDescription]=useState("")
    let data={name,brand,category,cost,image_Url,description}
    let merchant=JSON.parse(localStorage.getItem("merchant"))
    let k=merchant.id
    function action(e){
        e.preventDefault()
        axios.post(`http://localhost:1729/products/${k}`,data)
        .then((res)=>{
            alert("product added")
        })
        .catch((err)=>{
            alert("product not added")
        })
    }
    return ( 
        <div className="updateMerchant">
        <h1>Add Product</h1>
          <form onSubmit={action}>
            <FloatingLabel controlId="floatingPassword" label="Product Name">
            <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Brand Name">
            <Form.Control type="text" placeholder="brand" value={brand} onChange={(i)=>{setBrand(i.target.value)}} required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Category">
            <Form.Control type="text" placeholder="category" value={category} onChange={(i)=>{setCategory(i.target.value)}} required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Product Price">
            <Form.Control type="number" placeholder="cost" value={cost} onChange={(i)=>{setCost(i.target.value)}} required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Image URL">
            <Form.Control type="text" placeholder="image_url" value={image_Url} onChange={(i)=>{setImage_Url(i.target.value)}} required/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Description">
            <Form.Control type="text" placeholder="description" value={description} onChange={(i)=>{setDescription(i.target.value)}} required/>
          </FloatingLabel>
          
          <button>Add Product</button>
          </form>
          
        </div>
        // <div className="addProduct">
        //     <h1>Add Product</h1>
        //     <form onSubmit={action1}>
        //         <input type="text" placeholder="name" value={name} onChange={(i)=>{setName(i.target.value)}}/>
        //         <input type="text" placeholder="brand" value={brand} onChange={(i)=>{setBrand(i.target.value)}}/>
        //         <input type="text" placeholder="category" value={category} onChange={(i)=>{setCategory(i.target.value)}}/>
        //         <input type="number" placeholder="cost" value={cost} onChange={(i)=>{setCost(i.target.value)}}/>
        //         <input type="text" placeholder="image_url" value={image_Url} onChange={(i)=>{setImage_Url(i.target.value)}}/>
        //         <input type="text" placeholder="description" value={description} onChange={(i)=>{setDescription(i.target.value)}}/>
        //         <button>add</button>
        //     </form>


        // </div>
     );
}
 
export default AddProduct;