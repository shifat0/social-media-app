import React from "react";
import OptimizedImage from "../shared/OptimizedImage";

type Props = {};

export default async function StoryCard({}: Props) {
  const imageUrl =
    "https://res.cloudinary.com/dipzfddkj/image/upload/v1724960887/IMG_20190106_183157_836_x7fcxu.jpg";

  return (
    <div className="relative min-w-[150px] h-[200px] rounded-lg bg-secondary cursor-pointer">
      <OptimizedImage
        src={imageUrl}
        alt="Profile Picture"
        className="min-w-full h-full"
        imageClassName="rounded-lg"
      />

      <div className="absolute top-2 left-2">
        <OptimizedImage
          src={imageUrl}
          alt="Friends Profile Picture"
          className="w-8 h-8"
          imageClassName="rounded-full"
        />
      </div>

      <span className="absolute bottom-2 left-2">Friend's Name</span>
    </div>
  );
}
