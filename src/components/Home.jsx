import React, { useState, useCallback } from "react";

const ProductList = () => {
  const [products, setProducts] = useState({
    1: { id: 1, name: "Laptop", price: 1200 },
    2: { id: 2, name: "Smartphone", price: 800 },
    3: { id: 3, name: "Headphones", price: 150 },
  });

  const handleDelete = useCallback((id) => {
    setProducts((prevProducts) => {
      const newProducts = { ...prevProducts };
      delete newProducts[id]; // O(1) deletion
      return newProducts;
    });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {Object.keys(products).length === 0 ? (
        <p>No products available</p>
      ) : (
        Object.values(products).map((product) => (
          <div key={product.id} style={{ marginBottom: "10px" }}>
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
