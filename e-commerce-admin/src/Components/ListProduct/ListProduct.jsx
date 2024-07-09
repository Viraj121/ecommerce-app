import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../Assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

<<<<<<< HEAD
  const fetchInfo = () => { 
    fetch('https://ecommerce-app-backend-5hrm.onrender.com/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

=======
  const fetchInfo = () => {
    fetch('https://ecommerce-app-backend-5hrm.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }
  
>>>>>>> 51fe277d41fdd95b6f4311eb0cbabc6a6fe05232
  useEffect(() => {
    fetchInfo();
  }, [])

    const removeProduct = async (id) => {
      await fetch('https://ecommerce-app-backend-5hrm.onrender.com/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })

<<<<<<< HEAD
    fetch('https://ecommerce-app-backend-5hrm.onrender.com/allproducts') 
    .then((res) => res.json()) 
    .then((data) => setAllProducts(data))

=======
    fetch('https://ecommerce-app-backend-5hrm.onrender.com/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
>>>>>>> 51fe277d41fdd95b6f4311eb0cbabc6a6fe05232
  }

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((e) => {
          return (
            <div>
              <div className="listproduct-format-main listproduct-format">
                <img className="listproduct-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>${e.old_price}</p>
                <p>${e.new_price}</p>
                <p>{e.category}</p>
                <img className="listproduct-remove-icon" onClick={() => { removeProduct(e.id) }} src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
