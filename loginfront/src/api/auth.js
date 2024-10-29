import axios from "axios";

const API = "http://localhost:4000/api";

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API}/register`, user);
    return response.data; // Si la solicitud tiene éxito, devuelve la respuesta
  } catch (error) {
    // Manejo de errores: imprime en la consola el error y los detalles
    if (error.response) {
      // Error con respuesta del servidor
      console.error("Error en la respuesta del servidor:", error.response.data);
      console.error("Estado del error:", error.response.status);
    } else if (error.request) {
      // La solicitud fue hecha pero no hubo respuesta
      console.error(
        "Error en la solicitud, sin respuesta del servidor:",
        error.request
      );
    } else {
      // Algo ocurrió al configurar la solicitud
      console.error(
        "Error en la configuración de la solicitud:",
        error.message
      );
    }
    throw error; // Vuelve a lanzar el error para manejarlo en el frontend
  }
};
