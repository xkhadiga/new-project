import React from 'react';
import { useSelector } from 'react-redux';
import { StarIcon } from '../assets/Icons/HomeIcons'; // Assuming StarIcon is needed for product display

function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl mb-4 text-[#756d5d]">Your Favorite Products</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600">You haven't added any favorites yet.</p>
      ) : (
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[#735751]">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg shadow-[#dedbd2] transition cursor-pointer"
            >
              <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <h3 className="font-medium text-lg">{product.title}</h3>

              <div className="flex gap-2 text-sm mt-1">
                <p className="font-semibold">EGP {product.price}</p>
                {product.discountPercentage && (
                  <s className="text-gray-400">
                    {`EGP 
                     ${Math.round(
                       product.price / (1 - product.discountPercentage / 100)
                     )}`}
                  </s>
                )}
              </div>

              <div className="flex gap-1 text-sm mt-1">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < Math.round(product.rating)} />
                  ))}
                </div>{" "}
                <span className="text-gray-400">({product.stock} in stock)</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

export default Favorites;
