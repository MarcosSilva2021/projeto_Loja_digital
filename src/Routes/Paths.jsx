import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/NotFound";
import Produto from "../pages/Produto";
import EmConstrucao from "../pages/EmConstrucao";

const Paths = () => {
    return (  
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/produtos" element={<Produtos/>}/>
                        <Route path="/produto/:id/:nome?" element={<Produto />}/>

                        {/* Rotas em construção */}
                        <Route path="/em-construcao" element={<EmConstrucao />} />
                        <Route path="/cadastro" element={<EmConstrucao />} />
                        <Route path="/login" element={<EmConstrucao />} />
                        <Route path="/categorias" element={<EmConstrucao />} />
                        <Route path="/pedidos" element={<EmConstrucao />} />

                    </Route>
                    <Route path="*" element={<NotFound />} />                   
                </Routes>           
            </BrowserRouter>        
        </>
    );
}
 
export default Paths;