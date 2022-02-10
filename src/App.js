import React,{useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {Header} from './components'
import {Home, Cart} from "./components/pages";
import axios from "axios";
import {connect} from 'react-redux'
import setPizzas from './redux/actions/pizzas'

function App(props) {
  const {items, setPizzas}=props;

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => {
        console.log(data)
        setPizzas(data.pizzas)
      })
  },[])

  return (
    
    <div className="wrapper">
    <Header/>
      <div className="content">
      <Routes>
        <Route path="/" exact element={<Home items={items}/>}/>
        <Route path="/cart" exact element={<Cart/>}/> 
      </Routes>
      </div>
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return{
   items: state.pizzas.items,

}
}
const mapDispatchToProps = {
  setPizzas
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
