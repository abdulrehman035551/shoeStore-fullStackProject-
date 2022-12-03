import Home from "./components/Home/Home";  
import Header from "./components/Header/Header";
import { Route,Routes } from "react-router-dom";
import  SignInSide from "./components/Login/Login";
import  SignUp from "./components/Signup/Signup"
import Admin from "./components/admin/admin";
import {NotificationContainer, NotificationManager} from 'react-notifications'
import CreateProduct from "./components/admin/createProduct/createProduct";
import Order from "./components/admin/ordersummary/order"
import Products from "./components/Products/Products";
import Footer from "./components/Footer/footer";
import ProductDetails from "./components/productDetails/productDetails";
import Prodindex from "./components/prodindex/prodindex";
import Card from "./components/Card/Card"
function App() {
 
  return<>
 
  <Header/> 
 <Routes>
  <Route path="" element={<Home/>}></Route>
  <Route path="admin" element={<Admin/>}>
  <Route path="createproduct" element={ <CreateProduct/>}></Route>
  <Route path="ordersummary" element={ <Order/>}></Route>


  </Route>
  <Route path="/product/:id" element={<Products />}>
        <Route path="" element={<  Prodindex  />}></Route>
        <Route path=":details" element={<ProductDetails />}></Route>
      </Route>
  <Route path="login" element={ <SignInSide/>}></Route>
  <Route path="signup" element={ < SignUp/>}></Route>
  <Route path="Card" element={<Card />}></Route>

  {/* <Route path="products" element={ <Products/>}></Route> */}


 </Routes>
 <Footer/>

<NotificationContainer/>
  </>
 
}

export default App;
