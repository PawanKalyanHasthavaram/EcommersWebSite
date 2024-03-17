import axios from "axios";
import { useEffect } from "react";

const ProductView = () => {
    let merchant=JSON.parse(localStorage.getItem("merchant"))
    // useEffect(
    //     ()=>{
    //         axios.get(`http://localhost:1729/products/${merchant.id}`)
    //         .then((res)=>{
    //             console.log(res.data.data);
    //         alert("product loded")
    //         })
    //         .catch((err)=>{
    //         alert("product not loaded")
    //         })
    //     }
    // ,[])
    
   
    return ( 
        <div>
            <h1>ProductView</h1>
            <div>
                
            </div>

        </div>
        
     );
}
 
export default ProductView;