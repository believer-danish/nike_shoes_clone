import { products } from "../constants";
import ProductCard from "../components/ProductCard";
const PopularProducts = () => {
  return (
    <section className="max-container">
      {/* Product Summary  */}
      <div>
        <h1 className="text-4xl font-bold font-palanquin pb-8">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="lg:w-6/12 xl:4/12 leading-normal text-slate-gray ">
          Experience top notch quality and style with our sought-after
          selection. Discover a world of comfort,design and value.
        </p>
      </div>

      {/* Product Catalogue */}
      <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
