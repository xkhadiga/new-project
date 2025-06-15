import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariam S.",
      comment: "Shopora made shopping so fun and easy! Fast delivery too.",
      rating: 5,
      profilePic: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      name: "Ahmed R.",
      comment:
        "Great quality products. I ordered twice and I'm super satisfied.",
      rating: 4,
      profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      name: "Laila M.",
      comment: "The accessories I bought were even cuter in real life 😍!",
      rating: 5,
      profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];
  return (
    <section className="px-2 md:px-6">
      <h2 className="text-base md:text-xl text-center md:text-start px-2 md:px-6 mb-3 md:mb-4 text-[#756d5d]"> What Our Customers Say</h2>

      <div className="grid text-center gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-2 md:px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-lg border border-[#dedbd2] p-4 md:p-6 shadow-sm bg-white hover:shadow-md transition"
          >
            <p className="text-sm md:text-base text-[#413b39] mb-3 md:mb-4">“{t.comment}”</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src={t.profilePic}
                alt={`${t.name}'s profile`}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div>
                <div className="text-xs md:text-sm font-semibold text-gray-900">{t.name}</div>
                <div className="text-yellow-400 text-sm md:text-base">
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
