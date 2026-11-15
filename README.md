# 1 - Projeto loja digital

## Motivação

-Este é um projeto construido para o curso de Desenvolvimento Web Full Stack da Geração Tech 4.0, uma parceria entre o IEL Ceará e o Governo do Estado do Ceará.

## Objetivo

-Este é um frontend de uma loja online com todas as funcionalidades de uma e-commerce:
-- Gestão de produtos;
-- Categorias;
-- Laçamentos de ofertas e descontos;

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e dependências:

--    React: Biblioteca para construção da interface de usuário.
--    Vite: Ferramenta de build e desenvolvimento que oferece alta performance.
--    Axios: Utilizado para fazer requisições HTTP à API do backend.
--    React Router: Biblioteca para gerenciamento de rotas e navegação entre páginas.
--    PrimeReact: Conjunto de componentes de UI para construção de interfaces ricas e responsivas.


# 2 - Sugestão para estrutura de pastas

- Com o objetivo de organizar o projeto estruture o projeto de modo que dentro da pasta "src" existam as pastas dos componentes chamada `components` e a pasta de paginas chamada `pages`. Na pasta `components` devem ser criados os componentes funcionais do projeto e na `pasta` page deve conter cada aba da pagina da loja `drip-store`, contendo somente a chamada dos componentes criados. Essa organização facilitará a criação de rotas dentro do arquivo `App.js`.

```
├── src/
│   ├── compoments/
│   │   ├── Header
│   │   ├── Footer
│   │   ├── Logo
│   │   ├── ProductListing
│   │   ├── ProductCard
│   │   ├── ProductOptions
│   │   ├── BuyBox
│   │   ├── Section
│   │   ├── FilterGroup
│   │   └── ProductDetails
│   └── pages/
│       ├── HomePage
│       ├── ProductViewPage
│       └── ProductListingPage
├── App.js
└── index.js

```