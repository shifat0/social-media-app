"use client";

import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PostFormSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

export default function WritePostForm({}: Props) {
  // Initializing Form
  const form = useForm<z.infer<typeof PostFormSchema>>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      post: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: z.infer<typeof PostFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        // need to change this to a text editor
        <InputField form={form} name="post" label="Post" type="textarea" />
        <Button type="submit" className="w-full mt-4">
          Create Post
        </Button>
      </form>
    </Form>
  );
}
