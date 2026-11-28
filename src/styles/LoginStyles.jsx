import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh; /* Garante respiro entre o Header e o Footer */
  padding: 3rem 1rem;
  background: linear-gradient(180deg, #B5B6F2 0%, #EFEFFF 100%);
`;

export const LoginCard = styled.div`
  background-color: var(--white);
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  h3 {
    color: var(--dark-gray);
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p.subtitulo {
    color: var(--dark-gray-3);
    font-size: 0.95rem;
    margin-bottom: 1.75rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;

  label {
    color: var(--dark-gray-2);
    font-size: 0.875rem;
    font-weight: 700;
  }

  /* Garante espaçamento interno confortável nos inputs do PrimeReact */
  .p-inputtext {
    width: 100%;
    padding: 0.85rem 1rem;
    background-color: var(--light-gray-3);
    border: 1px solid transparent;
    border-radius: 6px;
    color: var(--dark-gray-2);

    &:focus {
      background-color: var(--white);
      border-color: var(--primary);
      box-shadow: none;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: var(--error);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 1.5rem;

  /* Estiliza o Button do PrimeReact usando as variáveis do GlobalStyles */
  .p-button {
    width: 100%;
    padding: 0.9rem;
    background-color: var(--primary);
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    color: var(--white);
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--tertiary);
    }
  }
`;