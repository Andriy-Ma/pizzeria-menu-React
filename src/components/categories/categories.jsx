import React,{useState, memo} from 'react';

 const Categories = memo( function Categories({items, onClick}) {
  
  const [activeItem, setActiveItem] = useState(null) ;
  
  const onSelectItem = (index) => {
      setActiveItem(index);
      onClick(index);
  };


  return (
    <div className="categories">
        <ul>
            <li
            className={activeItem === null ? 'active' :'' }
            onClick={()=>onSelectItem(null)}
            >Все</li>

            {items && items.map((item,i) => {return  <li 
            className={activeItem === i ? 'active' : ''}
            onClick={()=>onSelectItem(i) } 
            key={`${item}_${i}`}
            >{item}</li>})}
        </ul>
  </div>
  );
}
)

export default Categories;
