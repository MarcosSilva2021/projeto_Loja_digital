import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: #FFFFFF;
    padding: 25px 60px 15px 60px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    border-bottom: 1px solid #F5F5F5;

    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    /* Barra de Pesquisa */
    .search-box {
        position: relative;
        flex: 1;
        max-width: 550px;

        input {
            width: 100%;
            background-color: #F8F8F8;
            border: none;
            border-radius: 8px;
            padding: 14px 45px 14px 20px;
            font-size: 15px;
            color: #474747;

            &::placeholder {
                color: #999999;
            }

            &:focus {
                box-shadow: 0 0 0 2px #C9207140;
            }
        }

        i {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #999999;
            font-size: 18px;
            cursor: pointer;
        }
    }

    /* Ações da Direita (Cadastre-se, Entrar, Carrinho) */
    .user-actions {
        display: flex;
        align-items: center;
        gap: 25px;
        white-space: nowrap;

        .register-link {
            color: #474747;
            text-decoration: underline;
            font-size: 15px;
            &:hover {
                color: #C92071;
            }
        }

        .login-btn {
            background-color: #C92071;
            border: none;
            border-radius: 4px;
            padding: 10px 28px;
            font-weight: 600;
            font-size: 14px;
            color: #FFFFFF;
            cursor: pointer;

            &:hover {
                background-color: #991956;
            }
        }

        .cart-wrapper {
            position: relative;
            cursor: pointer;
            margin-left: 10px;
            color: #C92071;

            i {
                font-size: 22px;
            }

            .cart-badge {
                position: absolute;
                top: -8px;
                right: -10px;
                background-color: #EE4266;
                color: #FFFFFF;
                font-size: 11px;
                font-weight: bold;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    /* Menu de Navegação Inferior */
    nav ul {
        display: flex;
        gap: 32px;
        list-style: none;
        padding: 0;
        margin: 0;

        li a {
            color: #474747;
            text-decoration: none;
            font-size: 16px;
            padding-bottom: 6px;
            transition: all 0.2s;

            &:hover {
                color: #C92071;
            }

            &.active {
                color: #C92071;
                font-weight: 700;
                border-bottom: 1px solid #C92071;
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            {/* Linha Superior */}
            <div className="top-bar">
                <Logo /> {/* <-- Uso do componente Logo */}

                <div className="search-box">
                    <InputText placeholder="Pesquisar produto..." />
                    <i className="pi pi-search" />
                </div>

                <div className="user-actions">
                    <Link to="/cadastro" className="register-link">
                        Cadastre-se
                    </Link>
                    <Button label="Entrar" className="login-btn" />
                    <div className="cart-wrapper">
                        <i className="pi pi-shopping-cart" />
                        <span className="cart-badge">2</span>
                    </div>
                </div>
            </div>

            {/* Linha Inferior (Menu) */}
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                    <li><NavLink to="/categorias">Categorias</NavLink></li>
                    <li><NavLink to="/pedidos">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
