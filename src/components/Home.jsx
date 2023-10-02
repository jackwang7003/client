
import React, {useEffect, useState} from 'react';
import "./Home.scss";
import Card from './Card';


const Home = () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const url = 'https://fakestoreapi.com/products';
  
  

  useEffect(() => {
    const getItems = async () => {
      try {
        fetch(url)
          .then((res) => res.json())
          .then((json) => setItems(json));
      } catch (error) {
        console.log("error", error);
      }
    }
    getItems();
  }, []);

  useEffect(() => {
    const filteredItems = items.filter((item) => item.price <= maxPrice);
    setSelectedItems(filteredItems);
  }, [maxPrice, items]);



  return (
    <div className="item-list">
      <div className="left">
          <div className="filterItem">
              <h3>Filter by price</h3>
              <div className="inputItem">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
          </div>
      </div>
      <div className="right">

         {selectedItems.map((item) => <Card item={item} key={item.id} />)}
      </div>

     
    </div>
  );
}

export default Home;