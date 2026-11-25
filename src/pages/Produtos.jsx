import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import productsData from "../data/products.json";
import { useEffect, useState } from "react";
import localProducts from '../data/products.json';
import {localAPI} from "../services";

const ProdutosContainer = styled.main`
max-width: 1440px;
margin: 0 auto;
padding: 20px 32px 60px 32px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 24px;
`;

const Produtos = () => {
  const [products, setProducts] = useState(localProducts);

  async function buscarProdutos() {
    try {
      const request = await localAPI.get("/product");

      if (request.data.success && request.data.data.length > 0){
        setProducts(request.data.data);
      }

    }catch (error){
      console.log("Erro ao buscar produtos locais", error);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <ProdutosContainer>
      <PageTitle>Produtos lista</PageTitle>
      <ProductListing products={products} />
    </ProdutosContainer>
  );
};

export default Produtos;
