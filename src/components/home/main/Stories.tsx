import React from "react";
import StoryCard from "@/components/cards/StoryCard";
import OptimizedImage from "@/components/shared/OptimizedImage";
import Icon from "@/lib/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadStory from "./UploadStory";

type Props = {};

export default async function Stories({}: Props) {
  const imageUrl =
    "https://res.cloudinary.com/dipzfddkj/image/upload/v1724960887/IMG_20190106_183157_836_x7fcxu.jpg";

  return (
    <div className="bg-primary-foreground p-2 rounded-lg">
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
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
          </DialogTrigger>
          <DialogContent className="sm:max-w-1/3 bg-primary-foreground">
            <DialogTitle className="text-center border-b-2 pb-4">
              Create Story
            </DialogTitle>

            <UploadStory />
          </DialogContent>
        </Dialog>

        {/* Other random friends story cards */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[calc(100%-158px)]"
        >
          <CarouselContent className="ml-0 flex items-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-0 basis-1/3">
                <StoryCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    </div>
  );
}
