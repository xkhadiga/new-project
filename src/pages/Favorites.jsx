import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="p-4 md:p-6 mx-auto">
      <h2 className="text-lg md:text-xl mb-3 md:mb-4 text-[#756d5d] text-center">Your Favorite Products</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center text-sm md:text-base">You haven't added any favorites yet.</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-[#735751]">
          {favorites.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Favorites;
