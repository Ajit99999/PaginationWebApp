const ProductCard = ({ title, description, images }) => {
  return (
    <div className="m-6 h-80 border-2 p-2 w-64">
      <img className="h-48  w-60" src={images[0]} />
      <div className="">
        <p className="text-blue-600" >  {title}</p>
        <p className="truncate">  {description}</p>
      </div>
    </div>
  );
};
export default ProductCard;
