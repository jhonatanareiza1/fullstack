import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-4xl font-bold">Jhonatan Areiza Ramirez</h1>
              }
            ></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route
              path="/inicio"
              element={<h3>Si no falla nada nos vamos de chorro</h3>}
            ></Route>
            <Route
              path="/tasks"
              element={<h1 className="text-4xl font-bold">Tareas</h1>}
            ></Route>
            <Route
              path="/profile"
              element={<h1 className="text-4xl font-bold">Perfil</h1>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
