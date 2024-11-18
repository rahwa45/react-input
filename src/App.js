import React, { useState } from 'react';
import ItemList from './ItemList.js';
import AddItemForm from './AddItemForm.js';
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
    }
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='app'>
      <div className='app2'>
      <h1>Item List</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
      </div>
    </div>
  );
};

export default App;