import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden px-6 py-24"
    >
      <Image
        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2000&q=80"
        alt="A cup of coffee on a wooden café table"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-cream/75" aria-hidden="true" />
      <FadeIn className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-heading text-4xl leading-tight tracking-tight text-espresso sm:text-6xl lg:text-7xl">
          Slow coffee. Good mornings.
        </h1>
        <p className="mt-5 max-w-xl font-body text-base text-mocha/80 sm:text-lg md:text-xl">
          A neighborhood roastery and café in Cape&nbsp;Town.
        </p>
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-[#A35126]"
          >
            See the menu
          </a>
          <a
            href="#visit"
            className="inline-flex items-center justify-center rounded-full border border-espresso bg-cream/80 px-6 py-3 text-sm font-medium text-espresso transition-colors hover:bg-cream"
          >
            Find us
          </a>
        </div>
      </FadeIn>

      <a
        href="#menu"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-espresso"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
