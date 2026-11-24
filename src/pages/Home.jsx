import styled from "styled-components";
import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import productsData from "../data/products.json";
import Section from "../components/Section";

// Container principal da página Home com espaçamento interno e largura centralizada
const HomeContainer = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 32px 60px 32px;
`;

// Espaçamento padrão entre cada bloco da página (Banner, Coleções e Produtos)
const SectionBlock = styled.section`
  margin-bottom: 48px;
`;

// Título padrão das seções usando as cores e tamanhos do GlobalStyles
const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin-bottom: 20px;
`;

// Componente principal da página inicial
const Home = () => {
  // Lista de imagens do banner principal (exibe 1 por vez)
  const bannerImages = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" }
  ];

  // Lista de imagens das coleções em destaque (exibe 3 lado a lado)
  const collectionsImages = [
    { src: "/collection-1.png" },
    { src: "/collection-2.png" },
    { src: "/collection-3.png" }
  ];

  return (
    <HomeContainer>
  <Section>
    <Gallery width="1440" height="681" radius="4px" images={bannerImages} />
  </Section>

  <Section title="Coleções em destaque">
    <Gallery width="1440" height="251" radius="8px" numVisible={3} images={collectionsImages} />
  </Section>

  <Section title="Produtos em alta">
    <ProductListing products={productsData} />
  </Section>
</HomeContainer>
  );
};

export default Home;
