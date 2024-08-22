"use client";

import InputField from "@/components/form/InputField";
import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { usePostData } from "@/hooks/useApi";
import { authEndPoint } from "@/lib/endPoints";
import { resetPasswordFormSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function ResetPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  // Password Reset Token
  const forgetPasswordToken = useSearchParams().get("frgtPWDtkn");

  // Api
  const { mutateAsync } = usePostData(authEndPoint.resetPassword);

  // Initializing Form
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof resetPasswordFormSchema>) => {
    try {
      setIsLoading(true);

      const payload = { ...data, forgetPasswordToken };

      const response = (await mutateAsync({ payload })) as Response;

      toast.success(response?.message);
      router.push("/auth");
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 my-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-1/2 my-2 flex flex-col justify-center gap-4 bg-white p-5 rounded-xl shadow-md"
        >
          <h2>Reset Password</h2>

          <InputField
            form={form}
            name="newPassword"
            label="New Password"
            type="password"
            required={true}
            className="rounded-full shadow-inner"
          />

          <InputField
            form={form}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required={true}
            className="rounded-full shadow-inner"
          />

          <Button
            type="submit"
            variant="default"
            className="rounded-full flex items-center gap-3"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
