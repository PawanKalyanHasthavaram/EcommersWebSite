import { Route, Routes } from "react-router-dom";
import MerchantNavBar from "./MerchantNavBar";
import UpdateMerchant from "./updateMerchant";
import ProductView from "./productView";
import MerchantUpdate from "./MerchantUpdate";
import AddProduct from "./AddProduct";
const MerchantHome = () => {
    return (
        <div>
            <MerchantNavBar />
            <Routes>
                <Route path="/productview" element={<ProductView/>}/>
                <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
                <Route path="/addProduct" element={<AddProduct/>}/>
            </Routes>

        </div>


    );
}

export default MerchantHome;