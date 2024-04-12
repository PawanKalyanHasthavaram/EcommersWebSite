import { Link } from "react-router-dom";
import MerchantProfile from "./MerchantProfile";
const MerchantNavBar = () => {
    return (
        <div className="marchantNavBar">
            <div className="logo">
                <h1>Pawn Stars</h1>
            </div>
            <div className="option">
                <Link to="/MerchantHome/productview" >view products</Link>
                <Link to="/MerchantHome/addProduct">Add product</Link>
                
            </div>
            <MerchantProfile/>
        </div>
    );
}

export default MerchantNavBar;