"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InputField from "../form/InputField";
import { signUpFormSchema } from "@/lib/formSchema";

export default function Auth() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField
          form={form}
          name="firstName"
          label="First Name"
          required={true}
        />

        <InputField
          form={form}
          name="lastName"
          label="Last Name"
          required={true}
        />

        <InputField
          form={form}
          name="password"
          label="Password"
          required={true}
        />

        <InputField
          form={form}
          name="confirmPassword"
          label="Confirm Password"
          required={true}
        />

        <Button type="submit" variant="default">
          Submit
        </Button>
      </form>
    </Form>
  );
}
