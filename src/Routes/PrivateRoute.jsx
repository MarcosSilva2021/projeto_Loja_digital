import { useContext } from "react";
import { Context } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { logado } = useContext(Context);

    if (!logado){
        return <Navigate to="/login" replace />
    }

    return children;
}
 
export default PrivateRoute;