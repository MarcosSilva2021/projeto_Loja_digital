import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { localAPI } from "../services";
import localProducts from "../data/products.json";
import ProductDetail from "../components/ProductDetail";

const PageContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 32px 60px 32px;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 24px;
  color: var(--dark-gray-2);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Produto = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    async function buscarDetalheProdutos() {
        setLoading(true);

        try {
        const request = await localAPI.get(`/product/${id}`);

        if (request.data.success && request.data.data){
            setProduct(request.data.data);
            return;
        }

        }catch (error){
        console.log("APi indisponível... buscar em produtos locais", error);
        } finally {
            setLoading(false);
        }

        const localItem = localProducts.find(
            (item) => String(item.id) === String(id)
        );
        if (localItem){
            setProduct(localItem);
        }
    }

  useEffect(() => {
    buscarDetalheProdutos();
  }, [id]);

    if (loading) {
        return
            <PageContainer>
                Carregando detalhes do Produto
            </PageContainer>
    }

    return (  
        <PageContainer>
            <BackLink to="/produtos"> Voltar para todos os Pordutos</BackLink>
              {product ? (
                <ProductDetail product={product}/>
              ): (
                <h2>Produto não encontrado</h2>
              )}
        </PageContainer>
    );
}
 
export default Produto;
