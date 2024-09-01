import { useBlurImage } from "@/hooks/useBlurImage";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export default async function OptimizedImage({
  src,
  alt,
  className,
  imageClassName,
}: Props) {
  const { base64, img } = await useBlurImage(src);

  return (
    <div className={cn("relative w-full h-[200px]", className)}>
      <Image
        //   {...img}
        src={src}
        fill
        alt={alt}
        //   sizes="(max-width:768px) 100vw, (max-width: 1000px) 50vw, 30vw"
        placeholder="blur"
        blurDataURL={base64}
        className={cn("w-full h-auto object-cover", imageClassName)}
      />
    </div>
  );
}
