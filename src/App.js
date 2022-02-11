import React,{useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {Header} from './components'
import {Home, Cart} from "./components/pages";
import axios from "axios";
import { useDispatch } from "react-redux";
import setPizzas from './redux/actions/pizzas'

function App() {

  
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas?_sort=price&_order=asc')
      .then(({data}) => {
        dispatch(setPizzas(data));
      })
  },[])

  return (
    
    <div className="wrapper">
    <Header/>
      <div className="content">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/cart"  element={<Cart/>}/> 
      </Routes>
      </div>
    </div>
    
  );
}


export default App;

