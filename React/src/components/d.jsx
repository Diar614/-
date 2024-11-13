const products = [
    { name: 'Ноутбук', price: 50000, inStock: true },
    { name: 'Смартфон', price: 30000, inStock: false },
    { name: 'Наушники', price: 3000, inStock: true },
    { name: 'Мышь', price: 1000, inStock: true },
  ];
  
  function App() {
    return (
      <div>
        <h1>Магазин</h1>
        <ProductList products={products} />
      </div>
    );
  }
  
  export default App;
  