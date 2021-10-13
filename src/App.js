import Header from "./components/Header";
import Home from "./components/buyer/home/Home";
import About from "./components/About";
import Favourite from "./components/buyer/favourite/Favourite";
import { useEffect, useState } from "react";
import { BrowserRouter as BR, Route } from "react-router-dom";
// import {data} from "./data";
import axios from "axios";
import Signin from "./components/registration/Signin";
import Users from "./components/seller/Users";
import Products from "./components/seller/Products";
import OrderList from "./components/seller/OrderList";
import Signup from "./components/registration/Signup";
import Profile from "./components/buyer/Profile";

function App() {
  const [dataArr, setdataArr] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [total, settotal] = useState(0);

  const addToCart = (name, description, imgAddress, price) => {
    let id = favourite.length + 1;
    const myFav = {
      id,
      name,
      description,
      imgAddress,
      price,
    };
    settotal(total + price);
    setFavourite([...favourite, myFav]);
  };

  const removeFromFavourite = (id, price) => {
    setFavourite(
      favourite.filter((e) => {
        settotal(total - price);
        return e.id !== id;
      })
    );
  };

  useEffect(() => {
    let data;
    const headers = {
      Authorization: "Token " + localStorage.getItem("token"),
    };
    axios.get("http://127.0.0.1:8000/products/", { headers }).then((result) => {
      data = result.data;
      setdataArr(data);
    });
  }, []);

  return (
    <>
      <BR>
        <Header favCount={favourite.length} />
        <div className="container">
          {localStorage.getItem("token") === null ? (
            <>
              <Route exact path="/signin">
                <Signin />
              </Route>

              <Route exact path="/signup">
                <Signup />
              </Route>
            </>
          ) : (
            <div>
              <Route exact path="/">
                <Home data={{ dataArr, setdataArr, addToCart }} />
              </Route>
              <Route exact path="/favourite">
                <Favourite data={{ favourite, removeFromFavourite, total }} />
              </Route>
              <Route exact path="/users">
                <Users />
              </Route>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route exact path="/orderlist">
                <OrderList />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
            </div>
          )}
        </div>
      </BR>
    </>
  );
}

export default App;
