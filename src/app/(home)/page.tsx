export default function HomePage() {
  return (
    <section className="flex items-center justify-between gap-6">
      <div className="hidden md:block md:basis-1/4 bg-white">Left Sidebar</div>

      <div className="basis-full md:basis-1/2 bg-white">Main</div>

      <div className="hidden md:block md:basis-1/4 bg-white">Right Sidebar</div>
    </section>
  );
}
