import './Item.css';

const Item = ({id, name, price, description, image_url, addToCart, removeFromCart}) => {
    const alt = `Image of ${image_url}`;
    return(
        <div className="Item" key={id} id={id}>
            <img className="Item__img" src={image_url} alt={alt}/>
            <p className="Item__name">{name}</p>
            <p className="Item__description">{description}</p>
            <p className="Item__price">${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove from Cart</button>
        </div>
    );
}

export default Item;