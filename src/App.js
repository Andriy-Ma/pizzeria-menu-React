import React,{useState ,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {Header} from './components'
import {Home, Cart} from "./components/pages";
import axios from "axios";


function App() {

  const [pizzas, setPizzas] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => {
        setPizzas(data.pizzas)
      })
  },[])

  return (
    
    <div className="wrapper">
    <Header/>
      <div className="content">
      <Routes>
        <Route path="/" exact element={<Home items={pizzas}/>}/>
        <Route path="/cart" exact element={<Cart/>}/> 
      </Routes>
      </div>
    </div>
    
  );
}

export default App;
