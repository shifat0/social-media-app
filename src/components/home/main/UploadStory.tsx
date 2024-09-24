"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Icon from "@/lib/icon";
import { UploadImageSchema } from "@/utils/formSchema";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";

export default function UploadStory(): React.JSX.Element {
  type FormValue = z.infer<typeof UploadImageSchema>;

  // Initializing Form
  const form = useForm<FormValue>({
    resolver: zodResolver(UploadImageSchema),
  });

  const customFormLabel = () => (
    <>
      <Icon name="image" />
      <span>Upload Image</span>
    </>
  );

  return (
    <Form {...form}>
      <form>
        <InputField
          form={form}
          name="image"
          type="file"
          label={customFormLabel}
          className="hidden"
          labelClassName="border border-dashed p-4 min-h-56 min-w-32 flex flex-col items-center justify-center gap-2 cursor-pointer"
        />
      </form>
    </Form>
  );
}
