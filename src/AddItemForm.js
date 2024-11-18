import React, { useState } from 'react';

const AddItemForm = ({onAddItem}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new item"
        
      />
      <button className='add' type="submit">
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;