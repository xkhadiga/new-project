import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="p-6 mx-auto">
      <h2 className="text-xl mb-4 text-[#756d5d]">Your Favorite Products</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center">You haven't added any favorites yet.</p>
      ) : (
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[#735751]">
          {favorites.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Favorites;
