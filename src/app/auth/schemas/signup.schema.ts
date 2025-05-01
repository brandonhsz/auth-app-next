import { z } from "zod";

export const schema = z
  .object({
    enterpriseName: z.string().min(1, "El nombre de la empresa es obligatorio"),
    userNames: z.string().min(1, "El nombre es obligatorio"),
    userLastNames: z.string().min(1, "El apellido es obligatorio"),
    userEmail: z.string().email("Correo electrónico no válido"),
    userPhone: z
      .string()
      .min(10, "El número de teléfono debe tener al menos 10 caracteres"),
    userPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    userPasswordConfirmation: z
      .string()
      .min(
        6,
        "La confirmación de la contraseña debe tener al menos 6 caracteres"
      ),
  })
  .refine((data) => data.userPassword === data.userPasswordConfirmation, {
    message: "Las contraseñas deben coincidir",
    path: ["userPasswordConfirmation"],
  });
