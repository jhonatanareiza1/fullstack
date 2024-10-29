import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [Errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      setErrors([]); // Limpiar errores antes de una nueva solicitud
      const res = await registerRequest(user);
      setUser(res.data); // Establecer los datos del usuario registrado
      setIsAuthenticated(true); // Establecer autenticado
    } catch (error) {
      console.log("Error en el registro:", error);

      // Manejar errores de respuesta (error.response puede estar indefinido si no hay respuesta del servidor)
      if (error.response) {
        if (typeof error.response.data === "string") {
          setErrors([error.response.data]); // Si es un string
        } else if (Array.isArray(error.response.data)) {
          setErrors(error.response.data); // Si es un array de mensajes de error
        } else if (error.response.data.message) {
          setErrors([error.response.data.message]); // Si tiene un mensaje de error
        }
      } else {
        // Error sin respuesta del servidor (posible problema de red)
        setErrors(["No se pudo conectar con el servidor"]);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticated,
        Errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
