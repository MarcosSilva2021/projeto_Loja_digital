# Loja Digital - Frontend

Projeto frontend de uma plataforma de e-commerce desenvolvido em **React**, focado na construção de interfaces modernas, reutilização de componentes, integração com APIs REST e experiência de navegação fluida.

---

## Motivação

Este é um projeto construido para o curso de Desenvolvimento Web Full Stack da Geração Tech 4.0, uma parceria entre o IEL Ceará e o Governo do Estado do Ceará.

## Objetivo

Este é um frontend de uma loja online com todas as funcionalidades de uma e-commerce:
* Gestão e vitrine de produtos;
* Navegação por categorias;
* Lançamentos de ofertas e descontos;
* Autenticação de usuários e controle de acesso a rotas protegidas.

## Tecnologias Utilizadas

* **React (Vite):** Biblioteca principal para construção da interface baseada em componentes e gerenciamento de estado.
* **Axios:** Cliente HTTP utilizado para comunicação com APIs REST e configuração de interceptors para envio de tokens.
* **React Hook Form:** Gerenciamento e validação performática de formulários (como a tela de login).
* **React Router DOM:** Gerenciamento de rotas SPA (Single Page Application), navegação dinâmica e tratamento de páginas inexistentes.
* **Styled-Components:** Estilização modularizada via CSS-in-JS com suporte a variáveis globais de tema (`GlobalStyles`).
* **PrimeReact & PrimeFlex:** Biblioteca de componentes ricos de interface e sistema de grid responsivo.
* **PrimeIcons:** Conjunto de ícones utilizados na interface de busca, navegação e feedback visual.

---

# 2 - Estrutura de pastas


```
├── src/
│   ├── components/
│   │   ├── Header
│   │   ├── Footer
│   │   ├── Logo
│   │   ├── ProductListing
│   │   ├── ProductCard
│   │   └── ProductDetails
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── products.json
│   ├── layouts/
│   │   └── PageLayout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Produtos.jsx
│   │   ├── Produto.jsx
│   │   ├── Login.jsx
│   │   ├── Users.jsx
│   │   ├── EmConstrucao.jsx
│   │   └── NotFound.jsx
│   ├── Routes/
│   │   ├── Paths.jsx
│   │   └── PrivateRoute.jsx
│   ├── services/
│   │   └── index.js
│   ├── styles/
│   │   ├── GlobalStyles.jsx
│   │   └── LoginStyles.jsx
│   ├── App.jsx
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

5. Acesse no navegador o endereço : `http://localhost:5173`.


## Arquitetura e Eficiência de Layout

O projeto foi estruturado priorizando a manutenibilidade e a experiência do usuário:

* **Reaproveitamento de Layout (`PageLayout`):** Utiliza o padrão de layout compartilhado com `<Outlet />` do React Router, mantendo o `Header` e o `Footer` fixos e evitando re-renderizações desnecessárias durante a navegação entre páginas.
* **Componentização Reutilizável:** Criação de componentes modulares e configuráveis via props, como `<Gallery />` (usado tanto para o banner principal quanto para a vitrine de coleções em destaque), `<ProductCard />`, `<ProductListing />` e `<FooterInfo />`.
* **Sistema de Roteamento e Tratamento de Erros:**
  * Rotas principais configuradas (`/`, `/produtos`, `/produto/:id/:nome`).
  * **Tratamento de Rotas Inexistentes (`*`):** Redirecionamento automático para uma página amigável de *Not Found* (`404`) com opção de retorno rápido à página inicial.
  * **Tratamento de Funcionalidades Futuras (`/em-construcao`):** Ações como busca, cadastro, login e links institucionais redirecionam para uma tela informativa de *Serviço em Construção*, garantindo que o usuário nunca encontre links quebrados durante a navegação.
  * **Consumo de API com Axios e Fallback Local:**
  * A camada de serviços (`src/services/index.js`) utiliza o **Axios** para consumir os dados de produtos via requisições HTTP e mecanismo de **fallback** para dados locais salvos na pasta public.
  * **Estratégia de Fallback:** Caso a API externa esteja indisponível, ocorra falha de rede ou demora na resposta, a aplicação aciona automaticamente um mecanismo de *fallback* carregando os dados locais (`src/data/products.json`), garantindo que a vitrine nunca fique vazia ou quebre durante o uso.
* **Autenticação com JWT e Rotas Protegidas:**
  * **Tela de Login (`/login`):** Formulário construído com `react-hook-form` e componentes do `PrimeReact` estilizados via `LoginStyles.jsx`.
  * **Gerenciamento de Sessão (`AuthContext.jsx`):** Armazena e persiste o token **JWT** no `localStorage`, mantendo o usuário autenticado mesmo ao recarregar a página.
  * **Proteção de Rotas (`PrivateRoute.jsx`):** Bloqueia o acesso não autorizado a páginas restritas (como `/users`), redirecionando automaticamente usuários não autenticados para a tela de login.

---



---

## Próximos Passos (Roadmap)

As seguintes funcionalidades estão planejadas para implementação nas próximas etapas do desenvolvimento:

As seguintes funcionalidades estão planejadas para implementação nas próximas etapas do desenvolvimento:

* [x] Integração HTTP com **Axios** e mecanismo de **fallback** para dados locais.
* [x] Desenvolvimento da tela de **Login**, contexto de autenticação com **JWT** e proteção de rotas (`PrivateRoute`).
* [ ] Conclusão da rota de autenticação JWT no **Backend próprio** e migração completa dos endpoints de produtos e usuários.
* [ ] Implementação funcional do **Filtro de Busca** na barra superior e filtros por categoria/preço na listagem de produtos.
* [ ] Implementação da página completa de **Detalhes do Produto** com galeria interativa e seleção de variações (tamanhos/cores).
* [ ] Funcionalidade de **Carrinho de Compras** (adicionar, remover e calcular subtotal).

---

## Documentação Detalhada

Para um entendimento completos da interação, acesse a documentação específicos do projeto:

* [Documentação do frontend](./documentacao_frontend.md) — Guia passo a passo da organização e arquitetura da aplicação.
