import styled from "styled-components";
import Logo from "./Logo";
import FooterInfo from "./FooterInfo";

// Importa os ícones das redes sociais da pasta src/assets
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";

// Container principal do rodapé com fundo escuro e textos brancos
const FooterContainer = styled.footer`
  background-color: var(--dark-gray);
  color: var(--white);
  padding: 60px 60px 30px 60px;

  /* Grid que organiza as 4 colunas do rodapé lado a lado */
  .footer-content {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.2fr;
    gap: 40px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  /* Coluna da esquerda com a logo, descrição e ícones sociais */
  .brand-column {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 310px;

    /* Transforma a logo original do header em totalmente branca */
    a img {
      filter: brightness(0) invert(1);
    }

    p {
      font-size: 15px;
      line-height: 1.6;
      color: var(--white);
      margin: 0;
    }

    /* Alinha os ícones das redes sociais lado a lado sem redirecionamento */
    .social-icons {
      display: flex;
      align-items: center;
      gap: 24px;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  /* Linha horizontal que separa as colunas do texto de direitos autorais */
  hr {
    max-width: 1440px;
    margin: 40px auto 24px auto;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Texto centralizado de copyright na base do rodapé */
  .copyright {
    text-align: center;
    font-size: 13px;
    color: var(--white);
    margin: 0;
  }
`;

// Componente funcional que renderiza o rodapé completo da aplicação
const Footer = () => {
  // Listas de links para cada uma das 3 colunas de informação
  const infoList1 = [
    { text: "Sobre Drip Store", link: "/em-construcao" },
    { text: "Segurança", link: "/em-construcao" },
    { text: "Wishlist", link: "/em-construcao" },
    { text: "Blog", link: "/em-construcao" },
    { text: "Trabalhe conosco", link: "/em-construcao" },
    { text: "Meus Pedidos", link: "/em-construcao" },
  ];

  const infoList2 = [
    { text: "Camisetas", link: "/em-construcao" },
    { text: "Calças", link: "/em-construcao" },
    { text: "Bonés", link: "/em-construcao" },
    { text: "Headphones", link: "/em-construcao" },
    { text: "Tênis", link: "/em-construcao" },
  ];

  const infoList3 = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      link: "/em-construcao",
    },
    { text: "(85) 3051-3411", link: "/em-construcao" },
  ];

  return (
    <FooterContainer>
      <div className="footer-content">
        {/* Coluna 1: Logo branca, texto descritivo e ícones sociais */}
        <div className="brand-column">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={twitterIcon} alt="Twitter" />
          </div>
        </div>

        {/* Colunas 2, 3 e 4: Renderizadas dinamicamente pelo componente FooterInfo */}
        <FooterInfo title="Informação" informations={infoList1} />
        <FooterInfo title="Categorias" informations={infoList2} />
        <FooterInfo title="Contato" informations={infoList3} />
      </div>

      {/* Divisória e assinatura final */}
      <hr />
      <p className="copyright">© 2024 Digital Store</p>
    </FooterContainer>
  );
};

export default Footer;