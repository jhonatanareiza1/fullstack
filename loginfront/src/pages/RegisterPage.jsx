import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, Errors = [] } = useAuth(); // Corregido el nombre de isAuthenticated y Errors por defecto como array
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login"); // Cambiada la redirección a '/login'
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values); // Manejo de errores en la función signup
    } catch (err) {
      console.error("Error durante el registro:", err);
    }
  });

  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md">
      {Errors.length > 0 &&
        Errors.map((error, i) => (
          <div className="bg-red-600 p-2 text-white" key={i}>
            {error}
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Nombre de Usuario"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.username && (
          <p className="text-red-600">El nombre de usuario es incorrecto</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Correo Electrónico"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.email && (
          <p className="text-red-600">El correo electrónico es incorrecto</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.password && (
          <p className="text-red-600">La contraseña es incorrecta</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md my-2"
        >
          REGÍSTRATE
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
