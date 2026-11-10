import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartView from "./components/CartView";
import { products } from "./data/products";

export default function App() {
  const [activeTab, setActiveTab] = useState("shop");

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("vedas_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("vedas_cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => setCart([]);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const cartTotalCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        cartCount={cart.length} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Dynamic View Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "shop" && (
          <div className="space-y-6">
            {/* Header Title */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-3xl font-light tracking-tight text-slate-900">
                The Ladies & Teen Collection
              </h2>
              <p className="text-sm text-slate-500">
                Curated elegance designed for modern grace. Clean silhouettes and premium fabrics.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex justify-center gap-2">
              {["All", "Ladies", "Teens"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="max-w-2xl mx-auto text-center space-y-4 py-12">
            <h2 className="text-2xl font-light">About Vedas Estd 2015</h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Established in 2015, Vedas has been a trusted destination for exclusive ladies' and teen girls' dresses. Following our recent boutique renovation, we now focus entirely on refined apparel tailored for modern feminine style.
            </p>
          </div>
        )}

        {activeTab === "cart" && (
          <CartView 
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        )}
      </main>
    </div>
  );
}