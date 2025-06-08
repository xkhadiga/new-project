import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { addToCart, incrementQuantity, decrementQuantity } from "../store/cartSlice";
import {
  HeartIcon,
  HeartIconFilled,
  StarIcon,
} from "../assets/Icons/HomeIcons";

export default function Card({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const cartItems = useSelector((state) => state.cart.items);

  const cartItem = cartItems.find(item => item.id === product.id);

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
      className="border border-[#dedbd2] relative rounded-2xl p-4 shadow hover:shadow-lg shadow-[#dedbd2] transition-all duration-200 ease-in-out transform  cursor-pointer"
    >
      <button
        onClick={() => handleToggleFavorite(product)}
        className="absolute top-4 right-4 w-6 h-6 text-[#756d5d] hover:text-[#e30000] cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-107 z-10"
      >
        {isProductFavorite(product.id) ? (
          <span className="text-[#e30000]">
            <HeartIconFilled />
          </span>
        ) : (
          <span>
            <HeartIcon />
          </span>
        )}
      </button>

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

      {cartItem ? (
        <div className="mt-3 flex items-center justify-between  rounded-sm ">
          <button
            onClick={() => handleDecrement(product)}
            className="bg-black text-white px-4 font-bold py-1 rounded-md hover:bg-[#333333] cursor-pointer "
          >
            -
          </button>
          <span className="font-semibold transition-all duration-200 ease-in-out transform scale-100">{cartItem.quantity}</span>
          <button
            onClick={() => handleIncrement(product)}
            className="bg-black text-white px-4 font-bold py-1 rounded-md hover:bg-[#333333] cursor-pointer "
          >
            +
          </button>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => handleAddToCart(product)}
            className="mt-3 bg-black text-white py-1 px-4 rounded-sm hover:bg-[#333333] cursor-pointer transition-all duration-200  transform hover:scale-101 w-[80%]"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}
