export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Product Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-slate-900 group-hover:text-slate-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="text-sm font-bold text-slate-900">
            ₹{product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-95"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}