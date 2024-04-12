import Dropdown from 'react-bootstrap/Dropdown';

function MerchantProfile() {
  
    let merchant=JSON.parse(localStorage.getItem("merchant"))
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <img src="https://logodix.com/logo/1984127.png" style={{margin:10}} width="20px" height="20px" alt="" />
        {merchant.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">Active</Dropdown.Item>
        <Dropdown.Item href="">Inactive</Dropdown.Item>
        <Dropdown.Item href="/MerchantHome/updatemerchant">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="/">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MerchantProfile;