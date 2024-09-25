"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Icon from "@/lib/icon";
import { UploadImageSchema } from "@/utils/formSchema";
import { Form } from "@/components/ui/form";
import InputField from "@/components/form/InputField";
import { toast } from "react-toastify";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type FormValue = z.infer<typeof UploadImageSchema>;

export default function UploadStory(): React.JSX.Element {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Initializing Form
  const form = useForm<FormValue>({
    resolver: zodResolver(UploadImageSchema),
  });

  // Hanlding Image Change
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (!file.type.startsWith("image/")) {
        return toast.error("Only images are allowed to upload");
      }

      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Form Label
  const customFormLabel = () => (
    <>
      <Icon name="image" />
      <span>Upload Story</span>
    </>
  );

  return (
    <Form {...form}>
      <form>
        <div className="flex gap-4">
          <InputField
            form={form}
            name="image"
            type="file"
            label={customFormLabel}
            className="hidden"
            labelClassName="border border-dashed p-4 w-[150px] h-[200px] flex flex-col items-center justify-center gap-2 cursor-pointer"
            accept="image/*"
            onChange={handleImageChange}
          />

          {previewUrl && (
            <div className="w-[150px] h-[200px] border">
              <div className="relative w-full h-full">
                <Image
                  src={previewUrl}
                  alt="PreviewStory"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <Button type="submit" variant="secondary" className="w-full mt-4">
          Create Story
        </Button>
      </form>
    </Form>
  );
}
