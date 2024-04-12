import axios from "axios"
import { useEffect, useState } from "react"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

const UpdateProduct = () => {

  let param = useParams()
  let [id,setId]=useState("")
  let [name, setName] = useState("")
  let [brand, setBrand] = useState("")
  let [category, setCategory] = useState("")
  let [cost, setCost] = useState("")
  let [image_Url, setImage_Url] = useState("")
  let [description, setDescription] = useState("")
  let data={id,name,brand,category,cost,image_Url,description}
  
  useEffect(
    () => {
      
      axios.get(`http://localhost:1729/products/${param.id}`)
        .then((res) => {
          // console.log(res.data.data);
          setId(res.data.data.id)
          setName(res.data.data.name)
          setBrand(res.data.data.brand)
          setCategory(res.data.data.category)
          setCost(res.data.data.cost)
          setDescription(res.data.data.description)
          setImage_Url(res.data.data.image_Url)
          // alert("product loded")
        })
        .catch((err) => {
          alert("product not loaded")
        })
    }, [])




  let update = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:1729/products`, data)
      .then(
        (res) => {

          alert('data updated')
        }

      ).catch(
        (err) => {
          alert('data not updated')
        })
  }

  return (
    <div className="updateMerchant">
      <h1>Update Product</h1>
      <form onSubmit={update}>
        <FloatingLabel controlId="floatingPassword" label="Product Name">
          <Form.Control type="text" value={data.name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Brand Name">
          <Form.Control type="text" placeholder="brand" value={brand} onChange={(i) => { setBrand(i.target.value) }} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Category">
          <Form.Control type="text" placeholder="category" value={category} onChange={(i) => { setCategory(i.target.value) }} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Product Price">
          <Form.Control type="number" placeholder="cost" value={cost} onChange={(i) => { setCost(i.target.value) }} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Image URL">
          <Form.Control type="text" placeholder="image_url" value={image_Url} onChange={(i) => { setImage_Url(i.target.value) }} required />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Description">
          <Form.Control type="text" placeholder="description" value={description} onChange={(i) => { setDescription(i.target.value) }} required />
        </FloatingLabel>

        <button>update Product</button>
      </form>

    </div>
  );
}

export default UpdateProduct;