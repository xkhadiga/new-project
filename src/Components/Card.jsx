import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { addToCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";
import {
  HeartIcon,
  HeartIconFilled,
  StarIcon,
} from "../assets/Icons/HomeIcons";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find(item => item.id === product.id);

  const title = product.title.trim();
  const wordCount = title.split(/\s+/).length;
  const titleClassName = wordCount > 4 ? "text-xs sm:text-sm md:text-md font-normal sm:font-medium" : "text-sm sm:text-base md:text-lg font-medium sm:font-semibold";

  const isProductFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

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

  return (
    <div
      key={product.id}
      className="border bg-white border-[#dedbd2] relative rounded-lg  p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-md shadow-[#dedbd2] transition-all duration-200 ease-in-out transform cursor-pointer flex flex-col justify-center"
    >
      <button
        onClick={() => handleToggleFavorite(product)}
        className="absolute top-2 right-2 w-4 h-4 sm:top-3 sm:right-3 sm:w-5 sm:h-5 text-[#756d5d] hover:text-[#e30000] cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-107 z-10"
      >
        {isProductFavorite(product.id) ? (
          <AnimationOnScroll animateIn="animate__fadeIn"className="text-[#e30000]">
            <HeartIconFilled />
          </AnimationOnScroll>
        ) : (
          <AnimationOnScroll animateIn="animate__fadeIn">
            <HeartIcon />
          </AnimationOnScroll>
        )}
      </button>

      <div
        className="w-full h-24 sm:h-32 md:h-40 bg-gray-100 rounded-lg mb-2 sm:mb-3 md:mb-4 flex items-center justify-center overflow-hidden"
        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <h3
        className={`line-clamp-2 ${titleClassName}`}
        onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
      >
        {product.title}
      </h3>

      <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm mt-1">

        <p className="font-medium sm:font-semibold">EGP {product.price}</p>
        {product.discountPercentage && (
          <s className="text-gray-400 text-xs">
            {`EGP 
             ${Math.round(
               product.price / (1 - product.discountPercentage / 100)
             )}`}
          </s>
        )}
      </div>

      <div className="flex gap-0.5 sm:gap-1 text-xs sm:text-sm mt-1">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < Math.round(product.rating)} />
          ))}
        </div>{" "}
        <span className="text-gray-400 text-xs hidden sm:flex">({product.stock} in stock)</span>
      </div>

      {cartItem ? (
        <div className="mt-2 sm:mt-3 flex animate-in fade-in items-center justify-between rounded-sm">
          <button
            onClick={() => handleDecrement(product)}
            className="bg-black text-white px-2 sm:px-3 md:px-4 font-bold py-0.5 sm:py-1 rounded-md hover:bg-[#333333] cursor-pointer text-sm"
          >
            -
          </button>
          <span className="font-semibold text-sm sm:text-base transition-all duration-200 ease-in-out transform scale-100">{cartItem.quantity}</span>
          <button
            onClick={() => handleIncrement(product)}
            className="bg-black text-white px-2 sm:px-3 md:px-4 font-bold py-0.5 sm:py-1 rounded-md hover:bg-[#333333] cursor-pointer text-sm"
          >
            +
          </button>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center animate-in fade-in">
                     

          <button
            onClick={() => handleAddToCart(product)}
            className="mt-2 sm:mt-3 bg-black text-white py-1 px-3 sm:px-4 rounded-sm hover:bg-[#333333] cursor-pointer transition-all duration-200 text-xs sm:text-sm md:text-base transform hover:scale-101 sm:w-[80%]"
          >
            Add to Cart
          </button>
          </div>
        
      )}
    </div>
  );
}
