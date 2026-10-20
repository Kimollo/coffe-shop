"use client";

import { FormEvent, useState } from "react";

const hours = [
  { days: "Mon–Fri", time: "7am–5pm" },
  { days: "Sat", time: "8am–4pm" },
  { days: "Sun", time: "8am–2pm" },
];

const emptyForm = { name: "", email: "", message: "" };

export default function VisitSection() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
  }

  return (
    <section id="visit" className="w-full bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-heading text-4xl tracking-tight text-espresso sm:text-5xl">
            Come say hello
          </h2>
          <p className="mt-4 text-lg text-espresso">12 Loop Street, Cape Town</p>
          <table className="mt-8 w-full max-w-sm text-left text-sm">
            <tbody>
              {hours.map((row) => (
                <tr key={row.days} className="border-b border-espresso/10">
                  <th scope="row" className="py-3 pr-6 font-medium text-espresso">
                    {row.days}
                  </th>
                  <td className="py-3 text-mocha">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8 flex aspect-[4/3] items-center justify-center rounded-2xl bg-sage px-6 text-center text-cream">
            Map — 12 Loop Street
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-espresso">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              className="mt-2 w-full rounded-lg border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-espresso">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="mt-2 w-full rounded-lg border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none focus:border-terracotta"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-espresso">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              className="mt-2 w-full rounded-lg border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none focus:border-terracotta"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-[#A35126]"
          >
            Send message
          </button>
          {submitted ? (
            <p role="status" className="text-sm font-medium text-sage">
              Thanks! We&apos;ll be in touch.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
