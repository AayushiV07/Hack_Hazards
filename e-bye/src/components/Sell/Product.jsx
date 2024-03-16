
const Product = ({ image, name, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 m-4">
      <img src={image} alt={name} className="w-full mb-4 rounded-lg" />
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-gray-600">{price}</div>
      <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-md hover:bg-pink">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
