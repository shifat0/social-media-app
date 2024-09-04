import { z } from "zod";

export const signUpFormSchema = z.object({
  firstName: z.string().min(4, "First Name must be at least 4 characters."),
  lastName: z.string().min(2, "LastName must be at least 2 characters."),
  email: z.string().email("Invalid email"),
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
    .refine((data: any) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
    }),
});

export const loginFormSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(18, "Password must be at most 18 characters.")
    .regex(
      /^[a-zA-Z0-9]/,
      "password must contain a uppercase letter, a number"
    ),
});

export const OtpFormSchema = z.object({
  otp: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const forgetPasswordFormSchema = z.object({
  email: z.string().email("Invalid email format"),
});

export const resetPasswordFormSchema = z.object({
  newPassword: z
    .string()
    .min(6, "New Password must be at least 6 characters.")
    .max(18, "New Password must be at most 18 characters.")
    .regex(
      /^[a-zA-Z0-9]/,
      "password must contain a uppercase letter, a number"
    ),
  confirmPassword: z
    .string()
    .refine((data: any) => data.password === data.confirmPassword, {
      message: "Passwords do not match.",
    }),
});

export const PostFormSchema = z.object({
  post: z.string(),
});
