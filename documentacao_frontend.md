# Documentação — Projeto loja digital (Frontend)

Esta documentação detalha a arquitetura, os componentes, o sistema de roteamento, a identidade visual e a estratégia de gerenciamento de dados da aplicação **Digital Store**.

---

## 1. Visão Geral da Arquitetura

O projeto foi construído em **React** (via **Vite**) seguindo uma arquitetura modular baseada na separação de responsabilidades:

```text
projeto_Loja_digital/
├── public/                  # Imagens estáticas (banners, coleções, produtos e ícones SVG)
├── src/
│   ├── assets/              # Ícones e logotipos importados diretamente pelos componentes
│   ├── components/          # Componentes reutilizáveis de UI (Header, Footer, Gallery, Cards)
│   ├── data/                # Base de dados local em formato JSON (products.json)
│   ├── layouts/             # Estruturas de página compartilhadas (PageLayout.jsx)
│   ├── pages/               # Páginas completas vinculadas às rotas (Home, Produtos, etc.)
│   ├── Routes/              # Configuração centralizada de rotas (Paths.jsx)
│   ├── services/            # Configuração de cliente HTTP (Axios) para integração futura
│   ├── styles/              # Estilos globais e variáveis CSS de tema (GlobalStyles.js)
│   ├── App.jsx              # Componente raiz que integra estilos globais e roteamento
│   └── main.jsx             # Ponto de entrada da aplicação React
├── DOCUMENTACAO.md          # Documentação técnica detalhada da arquitetura e componentes
└── README.md                # Guia rápido de apresentação e execução
```

---

## 2. Tecnologias e Bibliotecas

* **React 18+ & Vite:** Interface reativa e ambiente de build.
* **React Router DOM:** Gerenciamento de navegação SPA (Single Page Application), rotas dinâmicas e tratamento de rotas inexistentes.
* **Styled-Components:** Estilização escopada por componente com suporte a propriedades dinâmicas (`props`).
* **PrimeReact & PrimeIcons:** Biblioteca de componentes de interface (como `InputText`) e pacote de ícones.
* **PrimeFlex:** Utilitários CSS responsivos para alinhamento e espaçamento.
* **Axios (em `src/services`):** Camada de comunicação HTTP preparada para consumo de APIs REST.

---

## 3. Identidade Visual e Estilos Globais (`src/styles/GlobalStyles.js`)

Toda a paleta de cores e tipografia (`Inter`) está centralizada em variáveis CSS no seletor `:root`, garantindo consistência visual em toda a aplicação:

| Variável CSS | Código Hex | Aplicação Principal |
| :--- | :--- | :--- |
| `--primary` | `#C92071` | Botões principais, links ativos e destaques de seleção |
| `--secondary` | `#B5B6F2` | Elementos secundários e apoios visuais |
| `--tertiary` | `#991956` | Estado `:hover` de botões primários |
| `--dark-gray` | `#1F1F1F` | Fundo do rodapé (`Footer`) e preços em destaque |
| `--dark-gray-2` | `#474747` | Textos principais, títulos de seções e nomes de produtos |
| `--dark-gray-3` | `#666666` | Textos de apoio e descrições |
| `--light-gray` | `#8F8F8F` | Preços originais riscados (quando há desconto) e placeholders |
| `--light-gray-3` | `#F5F5F5` | Fundo padrão da página (`body`) e campo de busca |
| `--white` | `#FFFFFF` | Fundo do cabeçalho (`Header`), cartões e textos do rodapé |

---

## 4. Sistema de Roteamento e Layout (`src/Routes/Paths.jsx`)

A aplicação utiliza o padrão de **Layout Compartilhado** através do componente `<PageLayout />` (que renderiza `<Header />`, `<Outlet />` e `<Footer />`), evitando a repetição de cabeçalho e rodapé a cada troca de tela.

### Mapa de Rotas

| Rota | Componente | Status / Comportamento |
| :--- | :--- | :--- |
| `/` | `<Home />` | **Ativa.** Exibe carrossel principal, coleções em destaque e vitrine de produtos. |
| `/produtos` | `<Produtos />` | **Ativa.** Exibe a listagem completa de produtos utilizando `<ProductListing />`. |
| `/produto/:id/:nome?` | `<Produto />` | **Ativa (Estrutura).** Rota dinâmica preparada para exibir detalhes de um item específico. |
| `/em-construcao` | `<EmConstrucao />` | **Ativa.** Tela informativa para recursos em desenvolvimento, com botão de retorno à Home. |
| `/login` | `<Login />` | **Ativa.** Tela de login |
| `/cadastro`, `/users`, `/categorias`, `/pedidos` | `<EmConstrucao />` | **Redirecionadas.** Apontam para a tela de serviço em construção para manter a experiência fluida. |
| `*` (Qualquer outra rota) | `<NotFound />` | **Ativa.** Tratamento de erro 404 para URLs inexistentes, com link para retornar à página inicial. |

---

## 5. Catálogo de Componentes

### 5.1. `<Header />` (`src/components/Header.jsx`)
* Renderiza a logomarca (`<Logo />`), campo de busca com suporte à tecla `Enter` e clique na lupa, links de acesso (`Cadastre-se` e `Entrar`), ícone do carrinho e menu de navegação com destaque automático na rota ativa (`NavLink`).
* A busca redireciona o usuário para `/em-construcao` enquanto o filtro dinâmico de backend não é ativado.

### 5.2. `<Footer />` e `<FooterInfo />` (`src/components/Footer.jsx`, `src/components/FooterInfo.jsx`)
* Rodapé estruturado em grid responsivo de 4 colunas sobre fundo `--dark-gray`.
* Reutiliza o componente `<Logo />` aplicando filtro CSS (`brightness(0) invert(1)`) para renderizá-lo na cor branca sem duplicar arquivos SVG.
* Utiliza `<FooterInfo title="..." informations={[...]} />` para renderizar dinamicamente as colunas **Informação**, **Categorias** e **Contato**.

### 5.3. `<Gallery />` (`src/components/Gallery.jsx`)
* Componente de carrossel deslizante construído sob medida com controle de estado (`useState`).
* **Propriedades suportadas:**
  * `width` e `height`: Dimensões do viewport em pixels.
  * `radius`: Arredondamento das bordas das imagens e miniaturas.
  * `numVisible` (padrão `1`): Define quantos slides aparecem simultaneamente (usado com `1` no banner principal e `3` na vitrine de coleções).
  * `showThumbs`: Quando presente, exibe miniaturas clicáveis (`117x95px`) abaixo do slide com borda de `2px solid var(--primary)` no item ativo.
  * `images`: Array de objetos no formato `[{ "src": "/caminho.jpg" }]`.
* Desabilita automaticamente as setas de navegação (`arrow-left.svg` e `arrow-right.svg`) ao atingir o primeiro ou o último slide.

### 5.4. `<ProductCard />` e `<ProductListing />` (`src/components/ProductCard.jsx`, `src/components/ProductListing.jsx`)
* **`<ProductCard />`:** Exibe a imagem do produto (`292x321px`), nome e preço. Caso `priceDiscount` seja informado, o valor original (`price`) recebe cor `--light-gray` com tachado (`line-through`) e o valor promocional é exibido ao lado em `--dark-gray` (`24px`).
* **`<ProductListing />`:** Componente encapsulador (`wrap`) que recebe o array `products` e renderiza a grade flexível de cartões `<ProductCard />`.

---

## 6. Estratégia de Dados e Integração Futura com Backend

Atualmente, as páginas `Home` e `Produtos` consomem uma base de da APILocal com axios e de dados local unificada em **`src/data/products.json`**, garantindo carregamento instantâneo, estabilidade offline e fidelidade visual às imagens armazenadas na pasta `public/`.

### Preparação para API Externa / Backend Próprio
A arquitetura foi desenhada para permitir a migração para dados remotos sem refatorar os componentes visuais:
1. O contrato de dados esperado por `<ProductListing />` (`name`, `image`, `price`, `priceDiscount`) já está isolado nas páginas.
2. A camada de serviços (`src/services`) e a estrutura de consumo assíncrono (`useEffect` + `useState` + `Axios`, validada anteriormente com a **Fake Store API**) já estão prontas para serem conectadas assim que o backend próprio da aplicação for concluído.

---

## 7. Roadmap de Evolução

* [x] **Backend & Banco de Dados:** Construção da API RESTful própria para gerenciamento real de produtos, usuários e pedidos.
* [ ] **Integração de Busca:** Conectar o `InputText` do `Header` à rota de listagem com filtragem via query params (`?filter=`).
* [x] **Página de Detalhes (`Produto.jsx`):** Consumir o parâmetro `:id` da URL para exibir galeria com `showThumbs`, seleção de tamanhos/cores e produtos relacionados.
* [ ] **Autenticação e Carrinho:** Implementar fluxos funcionais nas telas de Login, Cadastro e Carrinho de Compras.
