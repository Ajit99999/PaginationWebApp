import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  
  if(products?.length === 0)
  {
    return <>
    <p>No Products</p>
    </>
  }
  return (
    <div className="h-auto w-auto flex flex-row flex-wrap items-center">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
    </div>
  );
};
export default ProductList;
