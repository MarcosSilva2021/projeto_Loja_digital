import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Button} from 'primereact/button';

const HeaderContainer = styled.header`
    background-color: blueviolet;
    padding: 0 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: #FFFFFF;
    }
    & nav ul{
        display: flex;
        gap: 36px;
        list-style: none;
        & li a{
            color: #FFFFFF70;
            text-decoration: none;
            font-size: 18px;
            &:hover, &.active{
                color: #FFFFFF;
            }
        }
    }

`;

const Header = () => {
    return (
        <HeaderContainer>
                <h1>Logo</h1>
                <nav>
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
                    </ul>
                </nav>
                <Button label="Entrar" />
        </HeaderContainer>    
      );
}
 
export default Header;