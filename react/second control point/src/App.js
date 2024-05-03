import './App.css';
import ProductItem from './components/ProductItem';
import { useState } from 'react';


function App() {
  const data = [

    { id: 1, name: 'Велосипед', price: 1000, count: 1 },

    { id: 2, name: 'Самокат', price: 700, count: 1 },

    { id: 3, name: 'Ролики', price: 1300, count: 2 },

    { id: 4, name: 'Сноуборд', price: 19000, count: 4 }

  ]

  const [products, setProducts] = useState(data)

  function increment(id) {
    const newCount = products.map((elem) => {
      if (elem.id === id && elem.count < 25) {
        return { ...elem, count: elem.count + 1 };
      }
      return elem;
    });
    setProducts(newCount);
  }

  function decrement(id) {
    const newCount = products.map((elem) => {
      if (elem.id === id && elem.count > 0) {
        return { ...elem, count: elem.count - 1 }
      }
      return elem
    })
    setProducts(newCount)
  }

  function addProduct() {
    const input = prompt('Введите товар по следующему образцу - "название цена"');
    if (input) {
      const [productName, productPrice] = input.split(' ');
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        count: 1,
      };
      setProducts([...products, newProduct]);
    }
  }

  function deleteProduct(id) {
    const updatedProducts = products.filter(elem => elem.id !== id);
    setProducts(updatedProducts);
  };


  return (
    <div className="App">
      <button className='butb' onClick={addProduct}>Добавить товар</button>
      <div className='cards'>

        {products.map((elem) => (
          <ProductItem
            key={elem.id}
            name={elem.name}
            price={elem.price}
            count={elem.count}
            increment={() => increment(elem.id)}
            decrement={() => decrement(elem.id)}
            Delete={() => deleteProduct(elem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;