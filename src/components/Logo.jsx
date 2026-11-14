import { Link } from "react-router-dom";
import styled from "styled-components";
import logoHeader from "../assets/logo-header.svg";

const LogoContainer = styled(Link)`
    display: inline-flex;
    align-items: center;
    text-decoration: none;

    img {
        width: 253px;
        height: 44px;
        object-fit: contain;
    }
`;

const Logo = () => {
    return (
        <LogoContainer to="/">
            <img src={logoHeader} alt="Digital Store Logo" />
        </LogoContainer>
    );
}

export default Logo;