import { Route, Routes } from "react-router-dom";
import MerchantNavBar from "./MerchantNavBar";
import UpdateMerchant from "./updateMerchant";
import ProductView from "./productView";
import MerchantUpdate from "./MerchantUpdate";
const MerchantHome = () => {
    return (
        <div>
            <MerchantNavBar />
            <Routes>
                <Route path="/productview" element={<ProductView/>}/>
                <Route path="/updatemerchant" element={<MerchantUpdate/>}/>
            </Routes>

        </div>


    );
}

export default MerchantHome;