import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

const ItemList = () => {
    const items = useSelector(state => state.items);
    return (
        <>
            <h1>Trial</h1>
            {Object.keys(items).map((item, i) => (
              <Item 
                id={item} 
                name={items[item].name} 
                price={items[item].price} 
                description={items[item].description} 
                image_url={items[item].image_url}
              />
            ))}
        </>
    );
}

export default ItemList;