import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateItemTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const calculateOverallTotalPrice = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotalPrice(item), 0);
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };



  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg md:text-xl mb-4 text-[#756d5d] text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center text-sm md:text-base">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-3 md:gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#dedbd2] rounded-2xl p-3 md:p-4 shadow shadow-[#dedbd2] flex flex-col md:flex-row items-center gap-3 md:gap-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-medium text-base md:text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">Price: EGP {item.price}</p>
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 mt-2">
          <button
            onClick={() => handleDecrement(item)}
            className="bg-black text-white px-3 md:px-4 font-bold py-0.5 md:py-1 rounded-md hover:bg-[#333333] cursor-pointer text-sm"
          >
            -
          </button>
                  <span className='font-semibold px-2 md:px-4 text-sm md:text-base'>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item)}
            className="bg-black text-white px-3 md:px-4 font-bold py-0.5 md:py-1 rounded-md hover:bg-[#333333] cursor-pointer text-sm"
          >
            +
          </button>
                  <p className="ml-2 md:ml-4 font-semibold text-sm md:text-base">Total: EGP {calculateItemTotalPrice(item).toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-600 text-white py-1 px-2 md:px-3 rounded-md hover:bg-red-700 cursor-pointer text-sm md:text-base"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 md:mt-6 p-3 md:p-4 border-t border-[#dedbd2] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-2">
            <h3 className="text-base md:text-xl font-bold">Overall Total: EGP {calculateOverallTotalPrice().toFixed(2)}</h3>
            <div className="flex gap-2">
              <button
                onClick={handleClearCart}
                className="bg-gray-600 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-md hover:bg-gray-700 cursor-pointer text-sm md:text-base"
              >
                Clear Cart
              </button>
              <Link to="/checkout"
                className="bg-green-600 text-white py-1.5 px-3 md:py-2 md:px-4 rounded-md hover:bg-green-700 cursor-pointer text-sm md:text-base"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
