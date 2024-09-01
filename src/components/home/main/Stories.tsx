import StoryCard from "@/components/cards/StoryCard";
import OptimizedImage from "@/components/shared/OptimizedImage";
import Icon from "@/lib/icon";
import React from "react";

type Props = {};

export default async function Stories({}: Props) {
  const imageUrl =
    "https://res.cloudinary.com/dipzfddkj/image/upload/v1724960887/IMG_20190106_183157_836_x7fcxu.jpg";

  return (
    <div className="bg-primary-foreground p-2 rounded-lg">
      <div className="flex items-center gap-3">
        {/* First card for create story */}
        <div className="min-w-[150px] h-[200px] rounded-lg bg-secondary cursor-pointer">
          <OptimizedImage
            src={imageUrl}
            alt="Profile Picture"
            className="min-w-full h-2/3"
            imageClassName="rounded-t-lg"
          />

          <div className="h-1/3 relative text-center flex items-center justify-center">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary size-8 rounded-full p-1 flex items-center justify-center">
              <Icon name="circle-plus" />
            </div>

            <span>Create Your Story</span>
          </div>
        </div>

        {/* Other random friends story cards */}
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </div>
  );
}
