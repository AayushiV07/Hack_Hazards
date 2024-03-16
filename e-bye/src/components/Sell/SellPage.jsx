import Navbar from './Navbar';
import Product from './Product';

const SellPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto" id='sell'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Product
            image="product1.jpg"
            name="Carbon Monitoring System 1"
            price="$99.99"
          />
          <Product
            image="product2.jpg"
            name="Carbon Monitoring System 2"
            price="$149.99"
          />
          {/* Add more Product components as needed */}
        </div>
      </div>
    </div>
  );
};

export default SellPage;
