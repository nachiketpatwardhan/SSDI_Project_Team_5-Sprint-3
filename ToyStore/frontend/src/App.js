import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import UserListScreen from './screens/UserListScreen';
import background from "./wallpapers/white.png";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    localStorage.clear('cartIems');
    console.log((state) => state.cartItems);
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
            The Toy Store
            </Link>
          </div>
          <div>
            <Link className="brand" to="/">
            Products
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin &&(
              <div className="dropdown">
                <Link to="#admin">
                  Admin<i className="fa fa-caret-down "></i>
                  </Link>
                  
                    <ul className="dropdown-content">
                      {/* <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li> */}
                      <li>
                        <Link to="/productList">Prodcuts</Link>
                      </li>
                      {/* <li>
                        <Link to="/orderList">Orders</Link>
                      </li>*/
                      <li>
                        <Link to="/userList">Users</Link>
                      </li>}
                    </ul>
                  
                </div>
            )}
          </div>
        </header>
        <main style={{ backgroundImage: `url(${background})` }}>
        <div>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/product/:id/edit" 
          component={ProductEditScreen}
          exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <AdminRoute path="/productlist" 
          component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
