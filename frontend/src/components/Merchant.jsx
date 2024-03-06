import Form from 'react-bootstrap/Form';
const Merchant = () => {
    return (
        <div className="merchantLogin">
            <div className='title1'><h1>Merchant Login</h1></div>
            <div>
                <img className='img8' src="https://assets-v2.lottiefiles.com/a/4bf3bbba-1167-11ee-8a8e-175bda463efb/HK55Smih7x.gif" alt="" />
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <button className='btn btn-primary mx-3'>sign in</button>
                        <button className='btn btn-primary '>sign up</button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );

}

export default Merchant;