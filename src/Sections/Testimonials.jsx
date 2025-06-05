import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariam S.",
      comment: "Shopora made shopping so fun and easy! Fast delivery too.",
      rating: 5,
    },
    {
      name: "Ahmed R.",
      comment:
        "Great quality products. I ordered twice and I'm super satisfied.",
      rating: 4,
    },
    {
      name: "Laila M.",
      comment: "The accessories I bought were even cuter in real life 😍!",
      rating: 5,
    },
  ];
  return (
    <section className="px-6 ">
      <h2 className="text-xl px-6 mb-4 text-[#756d5d]"> What Our Customers Say</h2>

      <div className="grid text-center gap-6 md:grid-cols-3 px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-lg border border-[#dedbd2] p-6 shadow-sm bg-white hover:shadow-md transition"
          >
            <p className="  text-[#413b39] mb-4">“{t.comment}”</p>
            <div className="text-sm font-semibold text-gray-900">{t.name}</div>
            <div className="text-yellow-400">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
