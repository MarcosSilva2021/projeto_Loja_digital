import ProductListing from "../components/ProductListing";
import productsData from "../data/products.json";

const Produtos = () => {
  return (
    <section className="p-4">
      <h1>Produtos lista</h1>
      <ProductListing products={productsData} />
    </section>
  );
};

export default Produtos;
