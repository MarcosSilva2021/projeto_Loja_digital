import styled from "styled-components";
import ProductCard from "./ProductCard";

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: flex-start;
`;

const ProductListing = ({ products = [] }) => {
  return (
    <ListingContainer>
      {products.map((product, index) => (
        <ProductCard
          key={product.id || index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </ListingContainer>
  );
};

export default ProductListing;
