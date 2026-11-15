import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../services";

const Produtos = () => {

    const [products, setProducts] = useState([]);

    async function buscarProdutos(){
        const request = await API.get('/products');
        setProducts(request.data);        
    }

    useEffect(() => {
        buscarProdutos();
    }, [])

    console.log(products);

    return (  
        <>
            <section>            
            <h1>Produtos lista</h1>

                <ul className="grid list-none p-0">
                    <li className="col-12 md:col-3">
                        <div className="shadow-4 p3 border-round-md">
                            <Link to={"/produto/1/Abacate"}>Abacate</Link>
                            <div className="relative">
                                <img src="../../public/produc-image-1.jpeg"/>
                            </div>
                            <h3 className="mb-0">nome</h3>
                            <h6>price: R$ 00.00</h6>
                            <h2>priceDiscount</h2>

                        </div>
                        
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">
                            <Link to={"/produto/2/Banana"}>Banana</Link>
                        </div>
                        
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">
                            <Link to={"/produto/3/Cebola"}>Cebola</Link>
                        </div>
                        
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">
                            <Link to={"/produto/4/Espinafre"}>Espinafre</Link>
                        </div>
                        
                    </li>
                    <li className="col-12 md:col-3">
                        <div className="bg-red-500">
                            <Link to={"/produto/5/Uva"}>Uva</Link>
                        </div>
                        
                    </li>
                </ul>
            </section>
        </>
    );
}
 
export default Produtos;