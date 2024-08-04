"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "../form/InputField";
import { signUpFormSchema, loginFormSchema } from "@/lib/formSchema";
import getGoogleOAuthUrl from "@/utils/getGoogleOAuthUrl";
import { FcGoogle } from "react-icons/fc";

export default function Auth() {
  const [authMode, setAuthMode] = useState<string>("login");

  // Setting formSchema based on authMode
  const formSchema = authMode === "login" ? loginFormSchema : signUpFormSchema;

  // Setting defaultValues based on authMode
  const defaultValues =
    authMode !== "login"
      ? {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }
      : {
          email: "",
          password: "",
        };

  // Initializing useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  // Hanlding Form Submission
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 my-2 flex flex-col justify-center gap-4 bg-white p-5 rounded-xl shadow-md"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h2>Login with</h2>

          <a
            href={getGoogleOAuthUrl()}
            className="bg-secondary p-2 rounded-md shadow-md"
          >
            <FcGoogle size={30} />
          </a>

          <p>---- Or -----</p>
        </div>

        {authMode !== "login" && (
          <>
            <InputField
              form={form}
              name="firstName"
              label="First Name"
              required={true}
              className="rounded-full shadow-inner"
            />

            <InputField
              form={form}
              name="lastName"
              label="Last Name"
              required={true}
              className="rounded-full shadow-inner"
            />
          </>
        )}

        <InputField
          form={form}
          name="email"
          label="Email"
          type="email"
          required={true}
          className="rounded-full shadow-inner"
        />

        <InputField
          form={form}
          name="password"
          label="Password"
          type="password"
          required={true}
          className="rounded-full shadow-inner"
        />

        {authMode !== "login" && (
          <InputField
            form={form}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required={true}
            className="rounded-full shadow-inner"
          />
        )}

        <p className="text-linkText underline underline-offset-4 text-xs cursor-pointer">
          Forgot your password?
        </p>

        <Button type="submit" variant="default" className="rounded-full">
          {authMode === "login" ? "Login" : "SignUp"}
        </Button>

        {authMode === "login" ? (
          <p>
            Don't have an account?{" "}
            <span
              className="underline underline-offset-4 text-linkText cursor-pointer"
              onClick={() => setAuthMode("signup")}
            >
              SignUp
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="underline underline-offset-4 text-linkText cursor-pointer"
              onClick={() => setAuthMode("login")}
            >
              Login
            </span>
          </p>
        )}
      </form>
    </Form>
  );
}
