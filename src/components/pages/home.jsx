import React,{useCallback,useEffect} from 'react';
import { Categories , PizzaBlock, SortPopap} from '../index'
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas());
    },[]);

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
         items && items.map((item) => <PizzaBlock 
          key={item.id}
          {...item}
          />)
        }
      </div>
  </div>)
}

export default Home;
