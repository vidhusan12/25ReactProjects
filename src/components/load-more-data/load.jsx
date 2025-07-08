import { useEffect, useState } from "react"


export default function LoadMoreData() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
        }`
      );


      const result = await response.json();
      console.log(result)
      
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div className="container">

    </div>
  )
}