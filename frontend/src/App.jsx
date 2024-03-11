
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Landingpage from "./components/Landingpage"
import Merchant from "./components/Merchant"
import User from './components/User';
import MerchantSignUp from './components/MerchantSignUp';
import MerchantHome from './components/MerchantHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/merchant' element={<Merchant/>}/>
        <Route path='/MerchantSignUp' element={<MerchantSignUp/>}/>
        <Route path='/MerchantHome' element={<MerchantHome/>}/>
        

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
