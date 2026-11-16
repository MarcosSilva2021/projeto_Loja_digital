import { Link } from "react-router-dom";
import styled from "styled-components";

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
    margin: 0 0 8px 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  li a {
    color: var(--white);
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const FooterInfo = ({ title, informations = [] }) => {
  return (
    <InfoColumn>
      <h3>{title}</h3>
      <ul>
        {informations.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </InfoColumn>
  );
};

export default FooterInfo;