export default function CartView({ cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  // Calculate total price dynamically
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 3000 || subtotal === 0 ? 0 : 150;
  const grandTotal = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center space-y-4 py-16">
        <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-2xl">
          🛍️
        </div>
        <h2 className="text-xl font-light text-slate-900">Your bag is empty</h2>
        <p className="text-xs text-slate-500 leading-relaxed">
          Explore our collection of curated ladies' and teen dresses to add items to your shopping bag.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <h2 className="text-xl font-light text-slate-900">Your Shopping Bag ({cart.reduce((a, c) => a + c.quantity, 0)})</h2>
        <button
          onClick={onClearCart}
          className="text-xs text-slate-400 hover:text-red-500 transition-colors"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-xs"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded-xl bg-slate-100"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-medium text-slate-900">{item.name}</h4>
                  <p className="text-xs font-bold text-slate-900">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* Quantity Controller */}
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 px-1"
                  >
                    -
                  </button>
                  <span className="text-xs font-semibold text-slate-900 w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 px-1"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-slate-400 hover:text-red-500 text-xs transition-colors p-1"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 h-fit">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Summary</h3>
          
          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-slate-900">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span className="font-semibold text-slate-900">
                {shipping === 0 ? "FREE" : `₹${shipping}`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-[10px] text-slate-400">
                Add ₹{3000 - subtotal} more for FREE shipping.
              </p>
            )}
          </div>

          <div className="border-t border-slate-200 pt-3 flex justify-between text-sm font-bold text-slate-900">
            <span>Total</span>
            <span>₹{grandTotal}</span>
          </div>

          <button
            onClick={() => alert("Order successfully placed!")}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-xs transition-all shadow-xs"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}