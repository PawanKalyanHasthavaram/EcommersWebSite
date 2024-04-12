import { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import { Navigate, useNavigate } from "react-router-dom";

const ProductView = () => {
    let [data, setData] = useState([])
    let navigate= useNavigate()
    let merchant = JSON.parse(localStorage.getItem("merchant"))
    let editDate=(id)=>{
        navigate(`/MerchantHome/updateProduct/${id}`)
    }
    let remove=(id)=>{
        axios.delete(`http://localhost:1729/products/${id}`)
                .then((res) => {
                    // console.log(res.data.data);
                    // setData(res.data.data)
                    //alert("product loded")
                    alert("deleted")
                })
                .catch((err) => {
                    alert("product not deleted")
                })

    }
    useEffect(
        () => {
            axios.get(`http://localhost:1729/products/find-by-merchantId/${merchant.id}`)
                .then((res) => {
                    // console.log(res.data.data);
                    setData(res.data.data)
                    //alert("product loded")
                })
                .catch((err) => {
                    alert("product not loaded")
                })
        }, [])
        let searchBybrand = (brand) => {
            axios.get(`http://localhost:1729/products/find-by-brand/${brand}`)
              .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
              })
              .catch((err) => {
                console.log(err);
              })
          }
        
          let searchByCategory = (category) => {
            axios.get(`http://localhost:1729/products/find-by-category/${category}`)
            .then((res) => {
              console.log(res.data.data);
              setData(res.data.data)
            })
            .catch((err) => {
              console.log(err);
            })
          }
    return (
        <div className="disp">
            {
                data.map((i) => {
                    return (
                        <div className="productView">
                            <div>
                            <span>
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    sort
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="" onClick={() => { searchByCategory(i.category) }}>Category</Dropdown.Item>
                                            <Dropdown.Item href="" onClick={() => { searchBybrand(i.brand) }}>Brand</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                                <span id="category">{i.category}</span>
                                <span id="edit" onClick={()=>{editDate(i.id)}}>Edit</span>
                                <span id="delete" onClick={()=>{remove(i.id)}}>X</span>
                            </div>
                            <div className="image">
                                <img src={i.image_Url} alt="" />
                            </div>
                            <div className="disc">
                                <h4 id="name">{i.name}||{i.brand}</h4>
                                <span id="cost"><sup><b>₹</b></sup>{i.cost}</span>
                                <span id="desc">{i.description}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default ProductView;