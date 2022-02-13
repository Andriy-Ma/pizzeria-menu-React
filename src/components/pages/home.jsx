import React,{useCallback,useEffect} from 'react';
import { Categories , LoadingPizzaBlock, PizzaBlock, SortPopap} from '../index'
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from '../../redux/actions/filters';
import {fetchPizzas } from '../../redux/actions/pizzas';
import { addPizzaToCart } from '../../redux/actions/cart';

const categoryNames = [
  'Мясные ' ,
  'Вегетарианская',
  'Гриль',
  'Острые' ,
  'Закрытые'  
];

const sortItems = [
  {name:'популярности', type: 'popular', order: 'desc'},
  {name:'цене', type: 'price', order: 'desc'},
  {name:'алфавиту', type: 'name', order: 'asc'} ]

function Home() {
  
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({cart}) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPizzas(sortBy,category));
    },[category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  }

  console.log(cartItems)
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames}
        onClickCategory={onSelectCategory}
        activeCategory={category}/>
        <SortPopap
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
         isLoaded ? items.map((item) => <PizzaBlock
          onAddPizza={handleAddPizzaToCart}
          key={item.id}
          cartCount={cartItems[item.id] && cartItems[item.id].length}
          {...item}
          />) : Array(3).fill(0).map((_,index) => <LoadingPizzaBlock key={index}/> )
        }
      </div>
  </div>)
}

export default Home;
