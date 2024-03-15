import { Link } from "react-router-dom";
const MerchantNavBar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Pawn Shop</h1>
            </div>
            <div className="option">
                <Link to="/MerchantHome/productview">view products</Link>
                <Link to="/MerchantHome/updatemerchant">Update merchant</Link>

            </div>
        </nav>
    );
}

export default MerchantNavBar;