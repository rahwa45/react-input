

const Item = ({ item, index, onRemoveItem }) => {
  return (
    <li style={{ marginBottom: '10px'}}>
      {item}
      <button className="remove"
        onClick={() => onRemoveItem(index)}
       
      >
        Delete
      </button>
    </li>
  );
};

export default Item;