import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Stars from "../components/Stars";

function ProductInfoPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({ images: [] });
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    } else {
      fetch("https://fakestoreapi.com/products" + id)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  console.log(product);

  return (
    <div className="content">
      <div>
        <h2>{product.title}</h2>
        <img className="ProdImg" src={product.image} />

        <p>Price: {product.price}$</p>
        <b>Category: {product.category}</b>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating?.rate}</p>
        <Stars rating={product.rating?.rate} />

        <button className="goBack" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default ProductInfoPage;
