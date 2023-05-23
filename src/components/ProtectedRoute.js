import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ ing, children }) => {
    if (!ing) {
        console.log("el usuario no esta autenticado");
        return <Navigate to={"/"} />
    }
    return children;
}