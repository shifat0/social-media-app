import LeftSidebar from "./LeftSidebar";
import Main from "./Main";
import RightSidebar from "./RightSidebar";

export default function HomePage() {
  return (
    <main className="flex gap-8">
      <section className="hidden md:block md:basis-1/4 bg-primary-foreground">
        <LeftSidebar />
      </section>

      <section className="basis-full md:basis-1/2 overflow-hidden">
        <Main />
      </section>

      <section className="hidden md:block md:basis-1/4 bg-red-600">
        <RightSidebar />
      </section>
    </main>
  );
}
