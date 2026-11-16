import styled from "styled-components";

const CardContainer = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 292px;
  height: 321px;
  object-fit: cover;
  border-radius: 4px;
  background-color: var(--white);
`;

const ProductName = styled.h3`
  margin: 12px 0 6px 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--dark-gray-2);
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const OriginalPrice = styled.span`
  font-size: 24px;
  color: ${(props) => (props.$hasDiscount ? "var(--light-gray)" : "var(--dark-gray)")};
  text-decoration: ${(props) => (props.$hasDiscount ? "line-through" : "none")};
  font-weight: ${(props) => (props.$hasDiscount ? "400" : "700")};
`;

const DiscountPrice = styled.span`
  font-size: 24px;
  color: var(--dark-gray);
  font-weight: 700;
`;

const ProductCard = ({ image, name, price, priceDiscount }) => {
  const hasDiscount = Boolean(priceDiscount);

  return (
    <CardContainer>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <PriceContainer>
        <OriginalPrice $hasDiscount={hasDiscount}>
          ${price}
        </OriginalPrice>
        {hasDiscount && (
          <DiscountPrice>
            ${priceDiscount}
          </DiscountPrice>
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default ProductCard;
