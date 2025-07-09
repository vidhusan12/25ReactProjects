import { useState, useEffect } from "react"
import "./style.css"

export default function LoadMoreData() {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  //Fetch Function
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  //Disbale the button when 100 products are Loaded
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }



  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length === 0 && !loading ? (
          <div>No Products found.</div>
        ) : null}
        {products && products.length ? products.map((item) => (
          <div className="product" key={item.id}>
            <div className="product-image-container">
              <img
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="product-info">
              <span className="product-title">{item.title}</span>
            </div>
          </div>
        )) : null}
      </div>

      <div className="button-container">
        {disableButton ? <span className="product-limit-message">You have reached to 100 products</span> : null}
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>

        <button onClick={() => {
          setProducts([]);
          setCount(0);
          setDisableButton(false);
        }}>Reset</button>
      </div>
    </div>
  )
}