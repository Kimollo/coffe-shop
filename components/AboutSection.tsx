import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const values = ["Wi-Fi", "Dogs welcome", "Open 7 days"];

export default function AboutSection() {
  return (
    <section id="about" className="w-full overflow-hidden bg-white py-24 sm:py-28">
      <FadeIn className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-16 lg:px-6">
        <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:aspect-[4/5] lg:h-auto lg:rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80"
            alt="Warm light over wooden tables in a neighborhood coffee shop"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="px-6 lg:px-0">
          <h2 className="font-heading text-4xl tracking-tight text-espresso sm:text-5xl">
            A little corner of calm
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-mocha sm:text-lg">
            <p>
              The roaster sits just behind the counter. We roast in small
              batches through the week, so the cup you order was never left
              waiting in a warehouse.
            </p>
            <p>
              Ember & Oak is the room on the block where neighbors actually
              linger. Someone is always saving a seat, and the person pulling
              your shot already knows if you take it short.
            </p>
            <p>
              Mornings here are meant to be slow. Stay for the second cup, let
              the light move across the table, and leave when you are ready.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="rounded-full bg-sage px-4 py-2 text-sm font-medium text-cream"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
