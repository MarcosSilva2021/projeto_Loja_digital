import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Header from "../components/Header";

const Paths = () => {
    return (  
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/produtos" element={<Produtos/>}/>
                </Routes>            
            </BrowserRouter>
        
        </>


    );
}
 
export default Paths;