"use client";

export default function HomePage() {
  return (
    <section className="flex flex-row gap-6">
      <div className="hidden md:block md:basis-1/4 bg-primary-foreground">
        Left Sidebar
      </div>

      <div className="basis-full md:basis-1/2 bg-primary-foreground">Main</div>

      <div className="hidden md:block md:basis-1/4 bg-red-600">
        <div
          className="h-[calc(100vh-45px)] bg-primary-foreground fixed overflow-y-hidden scrollbar"
          onMouseEnter={(e) =>
            e.currentTarget.classList.add("overflow-y-scroll")
          }
          onMouseLeave={(e) =>
            e.currentTarget.classList.remove("overflow-y-scroll")
          }
        >
          Right Sidebar Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Alias dolorem earum minus, mollitia ipsam possimus aliquam
          perspiciatis doloribus in qui pariatur saepe consequatur porro! Et
          debitis dolor fuga perspiciatis consequuntur, iusto provident fugit
          laborum in sint aut suscipit blanditiis, a, obcaecati optio iste
          reiciendis? Maiores, quo? Possimus enim id repellendus tempora est
          suscipit aut, reprehenderit ipsam? Aut ipsum iure, atque explicabo
          itaque sapiente quo perspiciatis, quam maiores harum aspernatur
          reprehenderit minima et quibusdam enim! Labore nihil tempore iure
          perferendis, atque rem eveniet excepturi nobis velit quas delectus,
          earum magni porro dolorum accusantium architecto adipisci suscipit
          nesciunt ipsam autem quos tempora.
        </div>
      </div>
    </section>
  );
}
