const testimonials = [
  {
    quote:
      "I came in for a flat white before work and ended up staying until the cup was cold. It is the quietest hour of my day.",
    name: "Amina Patel",
    role: "Regular since 2021",
  },
  {
    quote:
      "You can taste that they roast it themselves. The espresso is sweet, and they still remember I take it with a splash of oat.",
    name: "Luke Meyer",
    role: "Works nearby",
  },
  {
    quote:
      "Saturday pour-overs became our ritual. Nobody rushes the table, and the pastry case is empty for the right reason.",
    name: "Thandiwe Nkosi",
    role: "Weekend regular",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-heading text-4xl tracking-tight text-espresso sm:text-5xl">
          What people say
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-xl border border-espresso/10 bg-cream p-6"
            >
              <p className="text-sm tracking-widest text-terracotta">
                <span className="sr-only">5 out of 5 stars</span>
                <span aria-hidden="true">★★★★★</span>
              </p>
              <blockquote className="mt-4 text-base leading-7 text-espresso italic">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium text-espresso">{item.name}</p>
                <p className="mt-1 text-sm text-mocha">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
