import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
`;

function formatarProduto(product){
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    image:
      product.ProductImages?.length > 0
        ? `http://localhost:3000${product.ProductImages[0].path}`
        : product.image || "/produc-image-1.jpeg",
      price: product.price,
      priceDiscount: product.price_with_discount ?? product.priceDiscount,
  };
}

const ProductListing = ({ products = [] }) => {
  return (
    <ListingContainer>
      {products.map((lerProduct, index) => {
        const product = formatarProduto(lerProduct);
        return(
          <ProductCard
            key={product.id || index}
            id={product.id}
            slug={product.slug}
            name={product.name}
            image={product.image}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        );  
      })}
    </ListingContainer>
  );
};

export default ProductListing;
