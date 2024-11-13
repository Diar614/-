import React from 'react';
import ProductList from './components/d'; 

const ProductList = ({ products }) => {
  // Фильтруем продукты, у которых inStock === true
  const availableProducts = products.filter(product => product.inStock);

  return (
    <div>
      <h2>Доступные товары:</h2>
      {availableProducts.length === 0 ? (
        <p>Нет доступных товаров.</p>
      ) : (
        <ul>
          {availableProducts.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong> - {product.price} руб.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
