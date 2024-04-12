import { Route, Routes } from "react-router-dom";
import UserNavBar from "./UserNavBar";
import UserLocation from "./UserLocation";
import UpdateUser from "./UpdateUser";
const UserHome = () => {
    return ( 
        
        <div>
            <UserNavBar/>
            <Routes>
                <Route path="/Location" element={<UserLocation/>}/>
                <Route path="/updateUser" element={<UpdateUser/>}/>
            </Routes>

        </div>
     );
}
 
export default UserHome;