import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcons from "./CartIcons";
import './Item.css';

function ProductList() {
  const products = useSelector(st => st.products);
  const productCards = Object.keys(products).map(id => (
    <div className="col-md-3 mb-3" key={id}>
      <div className="card">
        <div className="card-body">
          <img className="Item__img" src={products[id].image_url} alt={products[id].image_url}/>
          <h2 className="card-title text-center">
            <Link to={`/products/${id}`}>{products[id].name}</Link>
          </h2>
          <CartIcons id={id} />
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h4>Look at all of our beautiful products!</h4>
      <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;
