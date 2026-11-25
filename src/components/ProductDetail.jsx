import styled from "styled-components";

const DetailWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 600px;
  height: 500px;
  background-color: var(--white);
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: var(--dark-gray);
  margin: 0 0 12px 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin: 16px 0 24px 0;
`;

const CurrentPrice = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: var(--dark-gray);
`;

const OldPrice = styled.span`
  font-size: 18px;
  color: var(--light-gray);
  text-decoration: line-through;
`;

const DescriptionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: var(--light-gray);
  margin: 0 0 8px 0;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: var(--dark-gray-2);
  margin: 0 0 32px 0;
`;

const BuyButton = styled.button`
  width: 220px;
  height: 48px;
  background-color: var(--warning, #f6aa1c);
  color: var(--white, #ffffff);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const formatarMoeda = (valor) => {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const ProductDetail = ({ product }) => {
  if (!product) return null;

  const imageUrl =
    product.ProductImages?.length > 0
      ? `http://localhost:3000${product.ProductImages[0].path}`
      : product.image || "/produc-image-1.jpeg";

  const priceDiscount = product.price_with_discount ?? product.priceDiscount;
  const hasDiscount = Boolean(
    priceDiscount && priceDiscount > 0 && priceDiscount < product.price
  );

  return (
    <DetailWrapper>
      <ImageBox>
        <img src={imageUrl} alt={product.name} />
      </ImageBox>

      <InfoBox>
        <ProductTitle>{product.name}</ProductTitle>

        <PriceContainer>
          <CurrentPrice>
            {formatarMoeda(hasDiscount ? priceDiscount : product.price)}
          </CurrentPrice>
          {hasDiscount && (
            <OldPrice>{formatarMoeda(product.price)}</OldPrice>
          )}
        </PriceContainer>

        <DescriptionTitle>Descrição do produto</DescriptionTitle>
        <DescriptionText>
          {product.description ||
            "Descrição detalhada não informada para este produto."}
        </DescriptionText>

        <BuyButton >
          COMPRAR
        </BuyButton>
        
      </InfoBox>
    </DetailWrapper>
  );
};

export default ProductDetail;