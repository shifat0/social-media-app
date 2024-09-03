import OptimizedImage from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/button";
import Icon from "@/lib/icon";
import React from "react";
import WritePostModal from "./WritePostModal";

type Props = {};

export default async function WritePost({}: Props) {
  const imageUrl =
    "https://res.cloudinary.com/dipzfddkj/image/upload/v1724960887/IMG_20190106_183157_836_x7fcxu.jpg";

  return (
    <div className="bg-primary-foreground p-2 rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <OptimizedImage
            src={imageUrl}
            alt="Profile Picture"
            className="h-8 w-8"
            imageClassName="rounded-full"
          />

          <WritePostModal />
        </div>

        <hr />

        <div>
          <Button variant="ghost" size="sm" className="flex items-center gap-3">
            <Icon name="gallery-thumbnails" />
            Add Photos/Videos
          </Button>
        </div>
      </div>
    </div>
  );
}
