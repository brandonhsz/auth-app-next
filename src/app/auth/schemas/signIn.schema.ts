import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
});

export type TSignInSchema = z.infer<typeof schema>;
