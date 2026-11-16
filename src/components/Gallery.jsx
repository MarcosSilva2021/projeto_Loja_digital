import { useState } from "react";
import styled from "styled-components";

// Container principal que define a largura máxima da galeria e empilha o slide e as miniaturas
const GalleryWrapper = styled.div`
  width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Janela de visualização (recorte) que esconde os slides que estão fora da área visível
const SlideViewport = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.$height ? `${props.$height}px` : "400px")};
  overflow: hidden;
  border-radius: ${(props) => props.$radius || "0px"};
`;

// Trilho horizontal que segura todas as imagens lado a lado e faz o movimento de deslizar (translateX)
const SlideTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: ${(props) => (props.$numVisible > 1 ? "12px" : "0px")};
  transition: transform 0.4s ease-in-out;
  transform: translateX(
    calc(
      -${(props) => props.$currentIndex * (100 / props.$numVisible)}% - ${(
          props
        ) =>
          props.$numVisible > 1
            ? `${props.$currentIndex * (12 / props.$numVisible)}px`
            : "0px"}
    )
  );
`;

// Estilo de cada imagem dentro do trilho, ajustando a largura conforme a quantidade de slides visíveis
const SlideImage = styled.img`
  min-width: ${(props) =>
    props.$numVisible > 1
      ? `calc((100% - ${(props.$numVisible - 1) * 12}px) / ${props.$numVisible})`
      : "100%"};
  width: ${(props) =>
    props.$numVisible > 1
      ? `calc((100% - ${(props.$numVisible - 1) * 12}px) / ${props.$numVisible})`
      : "100%"};
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.$radius || "0px"};
`;

// Botão das setas de navegação fixado nas laterais (esquerda ou direita) e centralizado na vertical
const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === "left" ? "left: 16px;" : "right: 16px;")}
  background: transparent;
  border: none;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  img {
    width: 24px;
    height: 24px;
  }
`;

// Container que organiza as miniaturas (thumbnails) lado a lado abaixo do slide principal
const ThumbsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

// Botão de cada miniatura, destacando com borda na cor primária quando está selecionada
const ThumbButton = styled.button`
  padding: 0;
  background: transparent;
  border: ${(props) =>
    props.$isSelected ? "2px solid var(--primary)" : "2px solid transparent"};
  border-radius: ${(props) => props.$radius || "0px"};
  overflow: hidden;
  width: 117px;
  height: 95px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: ${(props) => props.$radius || "0px"};
  }
`;

// Componente principal da Galeria que recebe as configurações via props
const Gallery = ({
  className,
  width,
  height,
  radius,
  showThumbs,
  numVisible = 1,
  images = [],
}) => {
  // Guarda o índice (posição) da imagem que está sendo exibida no momento (começa na 0)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Evita que o componente quebre caso a lista de imagens venha vazia
  if (!images.length) return null;

  // Calcula qual é o último índice possível para não deslizar para um espaço em branco
  const maxIndex = Math.max(0, images.length - numVisible);

  // Verifica se o usuário está no primeiro ou no último slide para desabilitar as setas
  const isFirst = currentIndex === 0;
  const isLast = currentIndex >= maxIndex;

  // Função acionada ao clicar na seta da esquerda: volta uma imagem se não estiver na primeira
  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Função acionada ao clicar na seta da direita: avança uma imagem se não estiver na última
  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Função acionada ao clicar em uma miniatura: pula direto para a imagem escolhida
  const handleSelectThumb = (index) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryWrapper className={className} $width={width}>
      <SlideViewport $height={height} $radius={radius}>
        {/* Seta da esquerda para voltar o slide */}
        <ArrowButton
          type="button"
          $direction="left"
          onClick={handlePrev}
          disabled={isFirst}
          aria-label="Imagem anterior"
        >
          <img src="/assets/arrow-left.svg" alt="Anterior" />
        </ArrowButton>

        {/* Faixa que renderiza todas as imagens e se move conforme o currentIndex */}
        <SlideTrack $currentIndex={currentIndex} $numVisible={numVisible}>
          {images.map((item, index) => (
            <SlideImage
              key={index}
              src={item.src}
              alt={`Slide ${index + 1}`}
              $radius={radius}
              $numVisible={numVisible}
            />
          ))}
        </SlideTrack>

        {/* Seta da direita para avançar o slide */}
        <ArrowButton
          type="button"
          $direction="right"
          onClick={handleNext}
          disabled={isLast}
          aria-label="Próxima imagem"
        >
          <img src="/assets/arrow-right.svg" alt="Próxima" />
        </ArrowButton>
      </SlideViewport>

      {/* Renderiza as miniaturas apenas se a propriedade showThumbs for passada */}
      {showThumbs && (
        <ThumbsContainer>
          {images.map((item, index) => (
            <ThumbButton
              key={index}
              type="button"
              $isSelected={currentIndex === index}
              $radius={radius}
              onClick={() => handleSelectThumb(index)}
            >
              <img src={item.src} alt={`Miniatura ${index + 1}`} />
            </ThumbButton>
          ))}
        </ThumbsContainer>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
