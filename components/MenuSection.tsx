import FadeIn from "@/components/FadeIn";

const menuItems = [
  {
    name: "House Espresso",
    description: "Our signature blend, pulled short.",
    price: "R28",
    tag: "bestseller",
  },
  {
    name: "Oat Flat White",
    description: "Velvety oat milk, double shot.",
    price: "R42",
  },
  {
    name: "Cold Brew",
    description: "18-hour steep, served over ice.",
    price: "R38",
  },
  {
    name: "Matcha Latte",
    description: "Ceremonial grade, lightly sweet.",
    price: "R45",
  },
  {
    name: "Pour Over",
    description: "Single origin, brewed to order.",
    price: "R48",
    tag: "new",
  },
  {
    name: "Hot Chocolate",
    description: "Dark Belgian chocolate, steamed milk.",
    price: "R36",
  },
] as const;

const tagStyles = {
  bestseller: "bg-sage",
  new: "bg-terracotta",
} as const;

export default function MenuSection() {
  return (
    <section id="menu" className="w-full bg-cream px-6 py-24 sm:py-28">
      <FadeIn className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl tracking-tight text-espresso sm:text-5xl">
            What we&apos;re pouring
          </h2>
          <p className="mt-4 font-body text-base text-mocha sm:text-lg">
            Roasted in-house. Brewed with care.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="relative rounded-xl border border-espresso/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {"tag" in item ? (
                <span
                  className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide text-cream uppercase ${tagStyles[item.tag]}`}
                >
                  {item.tag}
                </span>
              ) : null}
              <h3 className="pr-24 font-heading text-xl text-espresso">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-mocha/80">
                {item.description}
              </p>
              <p className="mt-5 text-base font-bold text-terracotta">
                {item.price}
              </p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
