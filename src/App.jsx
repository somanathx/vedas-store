import { useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeTab, setActiveTab] = useState("shop");
  const [cart, setCart] = useState([]);

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
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-3xl font-light tracking-tight text-slate-900">
                The Ladies & Teen Collection
              </h2>
              <p className="text-sm text-slate-500">
                Curated elegance designed for modern grace. Clean silhouettes and premium fabrics.
              </p>
            </div>
            {/* Product Grid will go here next! */}
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
          <div className="max-w-2xl mx-auto text-center space-y-4 py-12">
            <h2 className="text-2xl font-light">Your Shopping Bag</h2>
            <p className="text-sm text-slate-500">Your bag is currently empty.</p>
          </div>
        )}
      </main>
    </div>
  );
}