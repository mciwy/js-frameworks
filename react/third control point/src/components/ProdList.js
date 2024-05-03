import ProdItem from './ProdItem'
import { useEffect } from 'react'
import { useState } from 'react'

function ProdList() {
    const [products, setProds] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setProds(json.products))
    }, [])

    const deleteProduct = (productID) => {
        setProds((prevProd) =>
            prevProd.filter((product) => product.id !== productID)
        )
    }

    return (
        <div className='list' >
            {products.map(products =>
                <ProdItem
                    key={products.id}
                    id={products.id}
                    img={products.images[0]}
                    title={products.title}
                    price={products.price + ' $'}
                    rating={products.rating}
                    onDelete={deleteProduct}
                />)}
        </div>
    )
}

export default ProdList 