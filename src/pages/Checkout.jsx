import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { shippingInfo, paymentMethod, cartItems, totalAmount });
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto p-6 text-[#735751]">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#756d5d]">Checkout</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping Information */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border border-[#dedbd2]">
          <h3 className="text-2xl font-semibold mb-6 text-[#756d5d]">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={shippingInfo.fullName}
                onChange={handleShippingChange}
                className="mt-1 block w-full p-2 border border-[#dedbd2] rounded-md shadow-sm focus:ring-[#735751] focus:border-[#735751]"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingChange}
                className="mt-1 block w-full p-2 border border-[#dedbd2] rounded-md shadow-sm focus:ring-[#735751] focus:border-[#735751]"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                className="mt-1 block w-full p-2 border border-[#dedbd2] rounded-md shadow-sm focus:ring-[#735751] focus:border-[#735751]"
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={shippingInfo.zipCode}
                onChange={handleShippingChange}
                className="mt-1 block w-full p-2 border border-[#dedbd2] rounded-md shadow-sm focus:ring-[#735751] focus:border-[#735751]"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={shippingInfo.country}
                onChange={handleShippingChange}
                className="mt-1 block w-full p-2 border border-[#dedbd2] rounded-md shadow-sm focus:ring-[#735751] focus:border-[#735751]"
                required
              />
            </div>
          </div>
        </div>

        {/* Order Summary & Payment */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md border border-[#dedbd2]">
          <h3 className="text-2xl font-semibold mb-6 text-[#756d5d]">Order Summary</h3>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <span>{item.title} (x{item.quantity})</span>
                <span>EGP {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center font-bold text-lg border-t pt-4 border-[#dedbd2]">
              <span>Total:</span>
              <span>EGP {totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-[#756d5d]">Payment Method</h3>
          <div className="space-y-4 mb-8">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={handlePaymentChange}
                  className="form-radio text-[#735751] focus:ring-[#735751]"
                />
                <span className="ml-2 text-gray-700">Credit Card</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentChange}
                  className="form-radio text-[#735751] focus:ring-[#735751]"
                />
                <span className="ml-2 text-gray-700">PayPal</span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentMethod === 'cashOnDelivery'}
                  onChange={handlePaymentChange}
                  className="form-radio text-[#735751] focus:ring-[#735751]"
                />
                <span className="ml-2 text-gray-700">Cash on Delivery</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-[#333333] transition duration-300 font-semibold cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
