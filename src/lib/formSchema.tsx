import { z } from "zod";

export const signUpFormSchema = z.object({
  firstName: z.string().min(4, "First Name must be at least 4 characters."),
  lastName: z.string().min(2, "LastName must be at least 2 characters."),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(18, "Password must be at most 18 characters.")
    .regex(
      /^[a-zA-Z0-9]/,
      "password must contain a uppercase letter, a number"
    ),
  confirmPassword: z
    .string()
    .refine((data: any) => data.password !== data.confirmPassword, {
      message: "Passwords do not match.",
    }),
});
