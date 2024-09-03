import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WritePostModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full bg-secondary rounded-full cursor-pointer p-2">
          Whats in your mind, Md. Shoaib?
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-1/3 bg-primary-foreground">
        <DialogHeader>
          <DialogTitle className="text-center border-b-2 pb-4">
            Create Post
          </DialogTitle>
        </DialogHeader>
        Post Form will be here
        <DialogFooter>
          <Button type="submit" className="w-full">
            Create Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
