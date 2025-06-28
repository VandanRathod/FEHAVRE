import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ArrowRight } from "lucide-react";
import { mockProducts, categories } from "@/lib/data";
import Gallery from '@/components/Gallery';
import { CategorySection } from "@/components/CategorySection";
import { CategoryCard } from "@/components/CategoryCard";

export default function Home() {
  // Get featured products (first 6 products for homepage)
  const featuredProducts = mockProducts.slice(0, 6);

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section with Image from Hero Folder */}
        <section className="relative h-[85vh] bg-black overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/bakery/hero/WhatsApp Image 2025-06-28 at 6.03.11 AM.jpeg"
              alt="Havre Bakery Hero Image"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-20 flex flex-col items-center justify-center h-[85vh] px-4 sm:px-6 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
              FRESH
              <br />
              DAILY
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
              Artisan bakery crafting exceptional baked goods with passion and tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-3 bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
                asChild
              >
                <Link to="/products">
                  Shop Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
                asChild
              >
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section - Product Card Style */}
        <CategorySection categories={categories} />

        {/* Featured Products Section - Same Style as Categories */}
        <section className="py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 animate-slide-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
                FEATURED PRODUCTS
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-primary mx-auto shadow-sm"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {featuredProducts.map((product, index) => (
                <CategoryCard
                  key={product.id}
                  label={product.name}
                  value={product.category}
                  image={product.image}
                  className="animate-fade-in"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Animated Gallery Section */}
        <Gallery masonry />

      </main>
    </div>
  );
}
