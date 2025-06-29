import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryCard } from "@/components/CategoryCard";
import { mockProducts } from "@/lib/data";

export default function Products() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products by search query only
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    return filtered;
  }, [searchQuery]);

  // Preview images from the products folder
  const previewImages = [
    "IMG-20250628-WA0019.jpg",
    "IMG-20250628-WA0021.jpg",
    "IMG-20250628-WA0022.jpg",
    "IMG-20250629-WA0033.jpg",
    "IMG-20250629-WA0042.jpg",
    "IMG-20250629-WA0043.jpg",
    "IMG-20250629-WA0044.jpg",
    "IMG-20250629-WA0045.jpg",
    "IMG-20250629-WA0054.jpg",
    "IMG-20250629-WA0055.jpg",
    "IMG-20250629-WA0056.jpg",
    "IMG-20250629-WA0057.jpg",
    "WhatsApp Image 2025-06-29 at 23.28.03_0bd0c522.jpg",
  ];

  return (
    <div className="min-h-screen">
      {/* Banner Image - visually appealing */}
      <div className="w-full h-32 md:h-44 lg:h-56 bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded-b-2xl shadow-lg relative">
        <img
          src="/images/bakery/banners/productpagebanner.jpg"
          alt="Bakery Banner"
          className="object-cover object-center w-full h-full"
        />
        {/* Simpler overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center w-full px-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md tracking-tight mb-1">
            OUR PRODUCTS
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-white/90 font-normal max-w-xl mx-auto drop-shadow-sm">
            Discover our full range of freshly baked goods, made daily with the
            finest ingredients and traditional techniques.
          </p>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-2 sm:px-4 py-4 xs:py-6 sm:py-8">
        {/* Search Only */}
        <div className="mb-6 flex justify-center">
          <div className="w-full max-w-md relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-0 border-b border-[#d6d3ce] focus:border-black focus:border-b-2 focus:outline-none text-gray-900 bg-background placeholder:text-gray-400 shadow-none transition-colors duration-200 rounded-none pl-11 pr-0 py-3 font-medium"
              autoComplete="off"
            />
          </div>
        </div>
        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 px-2">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                onClick={() => navigate(`/products/${product.id}`)}
                style={{ cursor: "pointer" }}
              >
                <CategoryCard
                  label={product.name}
                  value={product.category}
                  image={`/images/bakery/products/${previewImages[index % previewImages.length]}`}
                  className="animate-fade-in"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No products found.
          </div>
        )}
      </main>
    </div>
  );
}
