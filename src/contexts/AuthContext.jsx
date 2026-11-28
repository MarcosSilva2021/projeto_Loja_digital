import { createContext, useState } from "react";

export const Context = createContext();

export const AuthContext = ({children}) => {

    const [token, setToken] = useState(() =>
        localStorage.getItem("token")
    );

    const logado = Boolean(token);

    function salvarSessao( novoToken ){
        localStorage.getItem("token", novoToken);
        setToken(novoToken);
    }

    function logout () {
        localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <>
            <Context.Provider value={{ logado, token, salvarSessao, logout }}>
                {children}
            </Context.Provider>
        
        </>
    );
};