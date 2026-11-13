import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <>
            <h3>Página não localizada</h3>
            <Link to={"/"}>Voltar</Link>
        </>
    );
}
 
export default NotFound;