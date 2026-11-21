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
                    {
                        products.map((product) => (

                        <li className="col-12 md:col-3">
                        <div className="shadow-4 p3 border-round-md">
                            {/*<Link to={"/produto/1/Abacate"}>Abacate</Link>*/}
                            <Link to={"/produto/1/Abacate"}><h3 className="mb-0 text-overflow-ellipsis white-space-nowrap overflow-hidden">{product.title}</h3></Link>
                            <div className="relative">
                                {/* <img src="../../public/produc-image-1.jpeg" /> */}
                                <img className="w-full" style={{height: '300px', objectFit: 'contain'}} src={product.image} alt={product.title} />
                            </div>                            
                            <h6>R${product.price}</h6>
                            <h2>priceDiscount</h2>

                        </div>                        
                        </li>                   
                            
                        ) )
                    }
                    
                    
                </ul>
            </section>
        </>
    );
}
 
export default Produtos;