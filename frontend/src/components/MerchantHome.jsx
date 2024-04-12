import { Route, Routes } from "react-router-dom";
import MerchantNavBar from "./MerchantNavBar";
import ProductView from "./productView";
import MerchantUpdate from "./MerchantUpdate";
import AddProduct from "./AddProduct";
import UpdateProduct from "./updateProduct";
const MerchantHome = () => {
    return (
        <div>
            <MerchantNavBar/>
            <Routes>
                <Route path="/productview" element={<ProductView/>}/>
                <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
                <Route path="/updateProduct/:id" element={<UpdateProduct/>}/>
            </Routes>

        </div>
    );
}

export default MerchantHome;