import LeftSidebar from "./LeftSidebar";
import Main from "./Main";
import RightSidebar from "./RightSidebar";

export default function HomePage() {
  return (
    <section className="flex flex-row gap-8">
      <div className="hidden md:block md:basis-1/4 bg-primary-foreground">
        <LeftSidebar />
      </div>

      <div className="basis-full md:basis-1/2 bg-primary-foreground">
        <Main />
      </div>

      <div className="hidden md:block md:basis-1/4 bg-red-600">
        <RightSidebar />
      </div>
    </section>
  );
}
