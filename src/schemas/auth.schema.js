import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({ required_error: "el nombre de usuario es requerido" }),
  email: z
    .string({ required_error: "esta caja requiere un email" })
    .email({ message: "mail invalido" }),
  password: z.string({ required_error: "la contraseña no cumple" }).min(6, {
    message: "La contraseña no tiene los numeros minimos requeridos",
  }),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "esta caja requiere un email" })
    .email({ message: "mail invalido" }),
  password: z.string({ required_error: "la contraseña no cumple" }).min(6, {
    message: "La contraseña no tiene los numeros minimos requeridos",
  }),
});
