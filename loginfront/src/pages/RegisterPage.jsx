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
  const { signup, isAuthenticeted, Errors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticeted) navigate("/");
  }, [isAuthenticeted, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
  /*Formulario de registro*/
  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md">
      {Errors.map((error, i) => (
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
          placeholder="email "
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.email && (
          <p className="text-red-600">El email de usuario es incorrecto</p>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        {errors.password && (
          <p className="text-red-600">El password de usuario es incorrecto</p>
        )}
        <button type="submit">REGISTRATE</button>
      </form>
    </div>
  );
}

export default RegisterPage;
