import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import Logo from "./Logo";
import miniCartIcon from "../assets/mini-cart.svg";

const HeaderContainer = styled.header`
    background-color: var(--white);
    padding: 25px 60px 15px 60px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border-bottom: 1px solid var(--light-gray-3);

    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    /* 3.1.2 - Campo de Busca */
    .search-box {
        position: relative;
        flex: 1;
        max-width: 550px;

        input {
            width: 100%;
            background-color: var(--light-gray-3);
            border: none;
            border-radius: 8px;
            padding: 14px 45px 14px 20px;
            font-size: 15px;
            color: var(--dark-gray-2);

            &::placeholder {
                color: var(--light-gray);
            }

            &:focus {
                box-shadow: 0 0 0 2px var(--primary);
                outline: none;
            }
        }

        i {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--light-gray);
            font-size: 18px;
            cursor: pointer;

            &:hover {
                color: var(--primary);
            }
        }
    }

    /* 3.1.3 - Área de Redirecionamento */
    .user-actions {
        display: flex;
        align-items: center;
        gap: 25px;
        white-space: nowrap;

        .register-link {
            font-size: 16px;
            color: var(--dark-gray-2);
            text-decoration: underline;
            text-decoration-color: var(--dark-gray-2);

            &:hover {
                color: var(--primary);
                text-decoration-color: var(--primary);
            }
        }

        .login-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary);
            width: 114px;
            height: 40px;
            border-radius: 4px;
            color: var(--white);
            font-weight: 700;
            font-size: 14px;
            text-decoration: none;
            transition: background-color 0.2s;

            &:hover {
                background-color: var(--tertiary);
            }
        }

        /* 3.1.4 - Carrinho de Compras */
        .cart-wrapper {
            display: flex;
            align-items: center;
            margin-left: 10px;

            img {
                width: 24px;
                height: 24px;
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
            color: var(--dark-gray-2);
            text-decoration: none;
            font-size: 16px;
            padding-bottom: 6px;
            transition: all 0.2s;

            &:hover {
                color: var(--primary);
            }

            &.active {
                color: var(--primary);
                font-weight: 700;
                border-bottom: 2px solid var(--primary);
            }
        }
    }
`;

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            navigate(`/products?filter=${encodeURIComponent(searchTerm.trim())}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <HeaderContainer>
            {/* Linha Superior */}
            <div className="top-bar">
                <Logo />

                {/* 3.1.2 - Campo de busca */}
                <div className="search-box">
                    <InputText 
                        placeholder="Pesquisar produto..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <i className="pi pi-search" onClick={handleSearch} />
                </div>

                {/* 3.1.3 - Área de Redirecionamento */}
                <div className="user-actions">
                    <Link to="/cadastro" className="register-link">
                        Cadastre-se
                    </Link>
                    
                    <Link to="/login" className="login-btn">
                        Entrar
                    </Link>

                    {/* 3.1.4 - Carrinho de compras */}
                    <div className="cart-wrapper">
                        <img src={miniCartIcon} alt="Carrinho de compras" />
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