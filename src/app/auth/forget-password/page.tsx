"use client";

import InputField from "@/components/form/InputField";
import Spinner from "@/components/shared/Spinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { usePostData } from "@/hooks/useApi";
import { authEndPoint } from "@/lib/endPoints";
import { forgetPasswordFormSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Api
  const { mutateAsync } = usePostData(authEndPoint.forgetPassword);

  // Initializing Form
  const form = useForm<z.infer<typeof forgetPasswordFormSchema>>({
    resolver: zodResolver(forgetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof forgetPasswordFormSchema>) => {
    try {
      setIsLoading(true);

      const response = (await mutateAsync({ payload: data })) as Response;

      toast.success(response?.message);
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
          <h2>Forget Password</h2>

          <InputField
            form={form}
            name="email"
            label="Email"
            type="email"
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

          <span className="text-xs italic">
            We will send a password reset link
          </span>
        </form>
      </Form>
    </section>
  );
}
