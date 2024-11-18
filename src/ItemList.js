
import Item from './Item.js';

const ItemList = ({items, onRemoveItem}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;









