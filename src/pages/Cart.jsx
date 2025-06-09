import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart } from '../store/cartSlice';

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

  const handleCheckout = () => {
    alert('Proceeding to checkout!');

  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4 text-[#756d5d] text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#dedbd2] rounded-2xl p-4 shadow shadow-[#dedbd2] flex items-center gap-4"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600">Price: EGP {item.price}</p>
                <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => handleDecrement(item)}
            className="bg-black text-white px-4 font-bold py-1 rounded-md hover:bg-[#333333] cursor-pointer "
          >
            -
          </button>
                  <span className='font-semibold px-4'>{item.quantity}</span>
          <button
            onClick={() => handleIncrement(item)}
            className="bg-black text-white px-4 font-bold py-1 rounded-md hover:bg-[#333333] cursor-pointer "
          >
            +
          </button>
                  <p className="ml-4 font-semibold">Total: EGP {calculateItemTotalPrice(item).toFixed(2)}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 p-4 border-t border-[#dedbd2] flex justify-between items-center">
            <h3 className="text-xl font-bold">Overall Total: EGP {calculateOverallTotalPrice().toFixed(2)}</h3>
            <div className="flex gap-2">
              <button
                onClick={handleClearCart}
                className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 cursor-pointer"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
