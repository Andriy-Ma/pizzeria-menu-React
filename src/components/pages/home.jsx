import React,{useCallback,useEffect} from 'react';
import { Categories , LoadingPizzaBlock, PizzaBlock, SortPopap} from '../index'
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from '../../redux/actions/filters';
import {fetchPizzas } from '../../redux/actions/pizzas'

const categoryNames = [
  'Мясные ' ,
  'Вегетарианская',
  'Гриль',
  'Острые' ,
  'Закрытые'  
];

const sortItems = [
  {name:'популярности', type: 'popular'},
  {name:'цене', type: 'price'},
  {name:'алфавиту', type: 'alphabet'} ]

function Home() {
  
  const items = useSelector(({pizzas}) => pizzas.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
    },[category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames}
        onClick={onSelectCategory}/>
        <SortPopap items = {sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
         isLoaded ? items.map((item) => <PizzaBlock 
          key={item.id}
          {...item}
          />) : Array(10).fill(0).map((_,index) => <LoadingPizzaBlock key={index}/> )
        }
      </div>
  </div>)
}

export default Home;
