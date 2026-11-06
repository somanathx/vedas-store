export default function Navbar({ cartCount, activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="cursor-pointer" onClick={() => setActiveTab("shop")}>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
            Vedas <span className="text-xs font-normal text-slate-400">Estd 2015</span>
          </h1>
          <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
            Ladies & Teen Dresses
          </p>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button 
            onClick={() => setActiveTab("shop")}
            className={`transition-colors hover:text-slate-900 ${activeTab === "shop" ? "text-slate-900 font-semibold border-b-2 border-slate-900 pb-1" : ""}`}
          >
            Collection
          </button>
          <button 
            onClick={() => setActiveTab("about")}
            className={`transition-colors hover:text-slate-900 ${activeTab === "about" ? "text-slate-900 font-semibold border-b-2 border-slate-900 pb-1" : ""}`}
          >
            Our Heritage
          </button>
        </nav>

        {/* Cart Trigger Button */}
        <button
          onClick={() => setActiveTab("cart")}
          className="relative bg-slate-50 border border-slate-200 hover:bg-slate-100 px-4 py-2 rounded-full text-xs font-semibold text-slate-800 transition-all flex items-center gap-2"
        >
          <span>🛍️ Cart</span>
          <span className="bg-slate-900 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
            {cartCount}
          </span>
        </button>

      </div>
    </header>
  );
}