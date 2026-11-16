import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  gap: 16px;

  i {
    font-size: 48px;
    color: var(--primary);
  }

  h1 {
    font-size: 28px;
    color: var(--dark-gray);
    margin: 0;
  }

  p {
    font-size: 16px;
    color: var(--dark-gray-3);
    max-width: 450px;
    margin: 0 0 12px 0;
  }

  a {
    background-color: var(--primary);
    color: var(--white);
    padding: 12px 28px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--tertiary);
    }
  }
`;

const EmConstrucao = () => {
  return (
    <Container>
      <i className="pi pi-wrench" />
      <h1>Serviço em construção</h1>
      <p>
        Esta funcionalidade está sendo desenvolvida e estará disponível em breve.
      </p>
      <Link to="/">Voltar para a Home</Link>
    </Container>
  );
};

export default EmConstrucao;