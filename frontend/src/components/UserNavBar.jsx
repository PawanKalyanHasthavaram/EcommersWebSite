import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
const UserNavBar = () => {
    return ( 
        <div className="marchantNavBar">
            <div className="logo">
                <h1>AmazonLite</h1>
            </div>
            <div className="option">
                <Link to="/MerchantHome/productview" >view products</Link>
                <Link to="/MerchantHome/addProduct">Add product</Link>
            </div>
            <UserProfile/>
        </div>
     );
}
 
export default UserNavBar;