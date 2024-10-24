import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-indigo-700 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font=bold">Login</h1>
        <form onSubmit={onSubmit}>
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
          <button type="submit">INGRESA</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
