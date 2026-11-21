# Loja Digital - Frontend

Projeto frontend de uma plataforma de e-commerce desenvolvido em **React**, focado na construção de interfaces modernas, reutilização de componentes e experiência de navegação fluida.

---

## Motivação

-Este é um projeto construido para o curso de Desenvolvimento Web Full Stack da Geração Tech 4.0, uma parceria entre o IEL Ceará e o Governo do Estado do Ceará.

## Objetivo

-Este é um frontend de uma loja online com todas as funcionalidades de uma e-commerce:
-- Gestão de produtos;
-- Categorias;
-- Laçamentos de ofertas e descontos;

## Tecnologias Utilizadas

* **React (Vite):** Biblioteca principal para construção da interface baseada em componentes e gerenciamento de estado.
* **React Router DOM:** Gerenciamento de rotas SPA (Single Page Application), navegação dinâmica e tratamento de páginas inexistentes.
* **Styled-Components:** Estilização modularizada via CSS-in-JS com suporte a variáveis globais de tema (`GlobalStyles`).
* **PrimeReact & PrimeFlex:** Biblioteca de componentes ricos de interface e sistema de grid responsivo.
* **PrimeIcons:** Conjunto de ícones utilizados na interface de busca, navegação e feedback visual.

---

# 2 - Estrutura de pastas


```
├── src/
│   ├── compoments/
│   │   ├── Header
│   │   ├── Footer
│   │   ├── Logo
│   │   ├── ProductListing
│   │   ├── ProductCard
│   │   └── ProductDetails
│   └── pages/
│       ├── HomePage
│       ├── ProductViewPage
│       └── ProductListingPage
├── App.js
└── index.js

```

## Como Executar o Projeto Localmente

1. **Baixe e salve repositório:**
   ```bash
   git clone
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd projeto_Loja_digital
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Acesse no navegador o endereço indicado : `http://localhost:5173`.


## Arquitetura e Eficiência de Layout

O projeto foi estruturado priorizando a manutenibilidade e a experiência do usuário:

* **Reaproveitamento de Layout (`PageLayout`):** Utiliza o padrão de layout compartilhado com `<Outlet />` do React Router, mantendo o `Header` e o `Footer` fixos e evitando re-renderizações desnecessárias durante a navegação entre páginas.
* **Componentização Reutilizável:** Criação de componentes modulares e configuráveis via props, como `<Gallery />` (usado tanto para o banner principal quanto para a vitrine de coleções em destaque), `<ProductCard />`, `<ProductListing />` e `<FooterInfo />`.
* **Sistema de Roteamento e Tratamento de Erros:**
  * Rotas principais configuradas (`/`, `/produtos`, `/produto/:id/:nome`).
  * **Tratamento de Rotas Inexistentes (`*`):** Redirecionamento automático para uma página amigável de *Not Found* (`404`) com opção de retorno rápido à página inicial.
  * **Tratamento de Funcionalidades Futuras (`/em-construcao`):** Ações como busca, cadastro, login e links institucionais redirecionam para uma tela informativa de *Serviço em Construção*, garantindo que o usuário nunca encontre links quebrados durante a navegação.

---

## Fonte de Dados e Preparação para Backend

* **Consumo de Dados Locais:** Nesta etapa de entrega, a aplicação consome uma base de dados estruturada localmente em formato JSON (`src/data/products.json`), garantindo estabilidade, rapidez no carregamento e independência de conexão externa durante testes e avaliações.
* **Arquitetura Pronta para API Externa / Backend:** A camada de serviços (`src/services`) e os componentes de listagem foram projetados seguindo o padrão REST utilizado por APIs de e-commerce como a **Fake Store API** (`fakestoreapi.com`). Assim que o **backend próprio** da aplicação for construído, a integração ocorrerá de forma direta apenas substituindo a origem dos dados locais pelas requisições HTTP reais, sem necessidade de refatorar os componentes visuais.

---

## Próximos Passos (Roadmap)

As seguintes funcionalidades estão planejadas para implementação nas próximas etapas do desenvolvimento:

* [ ] Construção e integração do **Backend próprio** (API RESTful para produtos, usuários e pedidos).
* [ ] Implementação funcional do **Filtro de Busca** na barra superior e filtros por categoria/preço na listagem de produtos.
* [ ] Desenvolvimento das telas e fluxos de **Cadastro e Autenticação (Login)**.
* [ ] Implementação da página completa de **Detalhes do Produto** com galeria interativa e seleção de variações.
* [ ] Funcionalidade de **Carrinho de Compras** (adicionar, remover e calcular subtotal).

---

