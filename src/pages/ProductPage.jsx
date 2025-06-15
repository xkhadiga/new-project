import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { HeartIcon, HeartIconFilled, StarIcon } from '../assets/Icons/HomeIcons';

function ProductPage() {
  const location = useLocation();
  const { product } = location.state || {};

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.items);

  const cartItem = cartItems.find(item => item.id === product?.id);
  const isProductFavorite = (productId) => favorites.some((item) => item.id === productId);

  const handleToggleFavorite = (product) => {
    if (isProductFavorite(product.id)) {
      dispatch(removeFavorite(product));
    } else {
      dispatch(addFavorite(product));
    }
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-600">
        Product not found or loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-2 md:p-4 lg:p-8">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-3 md:p-4 flex items-center justify-center bg-gray-100">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-w-full max-h-64 md:max-h-96 object-contain rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm md:text-lg mb-3 md:mb-4">{product.description}</p>

            <div className="flex items-center mb-3 md:mb-4">
              <p className="text-xl md:text-2xl font-semibold text-gray-900 mr-3 md:mr-4">EGP {product.price}</p>
              {product.discountPercentage && (
                <s className="text-gray-500 text-sm md:text-lg">
                  {`EGP ${Math.round(product.price / (1 - product.discountPercentage / 100))}`}
                </s>
              )}
            </div>

            <div className="flex items-center text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
              <div className="flex mr-1.5 md:mr-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(product.rating)} />
                ))}
              </div>
              <span>({product.stock} in stock)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
            {cartItem ? (
              <div className="flex items-center justify-between w-full sm:w-1/2 bg-gray-100 rounded-md p-1.5 md:p-2">
                <button
                  onClick={() => handleDecrement(product)}
                  className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#333333] transition-colors duration-200 text-sm"
                >
                  -
                </button>
                <span className="font-semibold text-base md:text-lg">{cartItem.quantity}</span>
                <button
                  onClick={() => handleIncrement(product)}
                  className="bg-black text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#333333] transition-colors duration-200 text-sm"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full sm:w-1/2 bg-black text-white py-2.5 md:py-3 rounded-md hover:bg-[#333333] transition-colors duration-200 text-base md:text-lg font-medium"
              >
                Add to Cart
              </button>
            )}

            <button
              onClick={() => handleToggleFavorite(product)}
              className={`w-full sm:w-1/2 py-2.5 md:py-3 rounded-md border-2 text-sm md:text-base ${
                isProductFavorite(product.id)
                  ? 'border-[#e30000] text-[#e30000]'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              } transition-colors duration-200 flex items-center justify-center`}
            >
              {isProductFavorite(product.id) ? (
                <HeartIconFilled className="w-5 h-5 mr-1.5 md:w-6 md:h-6 md:mr-2" />
              ) : (
                <HeartIcon className="w-5 h-5 mr-1.5 md:w-6 md:h-6 md:mr-2" />
              )}
              {isProductFavorite(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>

      {/* Tags Section */}
      {product.tags && product.tags.length > 0 && (
        <div className="bg-white rounded-lg border border-[#dedbd2] p-4 md:p-6 mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Tags</h2>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {product.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Shipping Information Section */}
      {product.shippingInformation && (
        <div className="bg-white rounded-lg border border-[#dedbd2] p-4 md:p-6 mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Shipping Information</h2>
          <p className="text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
            <span className="font-semibold">Weight:</span> {product.weight}
          </p>
          <p className="text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">Estimated Delivery:</span> {product.shippingInformation}
          </p>
        </div>
      )}

      {/* Product Reviews/Comments Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="bg-white rounded-lg border border-[#dedbd2] p-4 md:p-6 mt-6 md:mt-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">Customer Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 pb-3 md:pb-4 mb-3 md:mb-4 last:border-b-0 last:pb-0 last:mb-0">
              <div className="flex items-center mb-1.5 md:mb-2 gap-3 md:gap-4">
                <span className="font-semibold text-gray-800 text-sm md:text-base">{review.reviewerName}</span>
                <div className="flex mr-1.5 md:mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < Math.round(review.rating)} />
                  ))}
                </div>
                
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
