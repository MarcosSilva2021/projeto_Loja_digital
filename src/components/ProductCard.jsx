import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled(Link)`
  width: 292px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
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

const formatarMoeda = (valor) => {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const ProductCard = ({ id, slug, image, name, price, priceDiscount }) => {
  // Só considera desconto se existir, for maior que 0 e menor que o preço cheio
  const hasDiscount = Boolean(priceDiscount && priceDiscount > 0 && priceDiscount < price);

  // Define a rota de destino (usa slug se existir, senão vai apenas pelo id)
  const productLink = slug ? `/produto/${id}/${slug}` : `/produto/${id}`;

  return (
    <CardContainer to={productLink}>
      <ProductImage src={image} alt={name} />
      <ProductName>{name}</ProductName>
      <PriceContainer>
        <OriginalPrice $hasDiscount={hasDiscount}>
          {formatarMoeda(price)}
        </OriginalPrice>
        {hasDiscount && (
          <DiscountPrice>
            {formatarMoeda(priceDiscount)}
          </DiscountPrice>
        )}
      </PriceContainer>
    </CardContainer>
  );
};

export default ProductCard;