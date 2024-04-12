import Dropdown from 'react-bootstrap/Dropdown';
const UserProfile = () => {
    let user = JSON.parse(localStorage.getItem("user"))
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img src="https://logodix.com/logo/1984127.png" style={{ margin: 10 }} width="20px" height="20px" alt="" />
                    {user.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="">Orders</Dropdown.Item>
                    <Dropdown.Item href="/UserHome/Location">Location</Dropdown.Item>
                    <Dropdown.Item href="/UserHome/updateUser">Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </div>
    );
}
export default UserProfile;