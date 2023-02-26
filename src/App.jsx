import { useEffect, useState } from "react";

import "./App.css";
import PageList from "./components/PageList";
import ProductList from "./components/ProductList";

function App() {
  const [totalproductLists, setTotalProductLists] = useState(null);
  const [productLists, setProductLists] = useState(null);
  const [productPerPage] = useState(10);
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=50`);
      const data = await res.json();
      setTotalProductLists(data?.products);
      setProductLists(data?.products?.slice(0, productPerPage * 1));
      setPageNo(Math.ceil(data.products?.length / productPerPage));
    } catch (err) {
      console.log(err);
      setProductLists([]);
    }
  };

  const handleClick = (data) => {
    const newProducts = totalproductLists.slice(
      productPerPage * data,
      productPerPage * data + productPerPage
    );
    setProductLists(newProducts);
  };
  return (
    <div className="App">
      <ProductList products={productLists} />
      <PageList clickHandler={handleClick} pageNo={pageNo} />
    </div>
  );
}

export default App;
