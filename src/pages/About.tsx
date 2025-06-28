import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useCart } from "@/lib/cart-context";

export default function About() {
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen">
      <main>
        {/* Nike-style Hero Section */}
        <section className="nike-section bg-white">
          <div className="nike-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="nike-heading-xl text-black">
                OUR STORY
              </h1>
              <p className="nike-body-lg text-gray-600 max-w-2xl mx-auto">
                Crafting exceptional baked goods with passion, tradition, and innovation since 1985.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="nike-section bg-white">
          <div className="nike-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="nike-heading-lg text-black">
                    TRADITION MEETS INNOVATION
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="nike-body">
                      Founded in 1985, HAVRE began as a small neighborhood bakery with a simple mission: 
                      to create exceptional baked goods using traditional techniques and the finest ingredients.
                    </p>
                    <p className="nike-body">
                      What started as a family dream has grown into a beloved institution, serving thousands 
                      of customers who appreciate the perfect balance of time-honored craftsmanship and 
                      modern innovation.
                    </p>
                    <p className="nike-body">
                      Every morning, our master bakers arrive before dawn to begin the careful process of 
                      mixing, kneading, and baking that creates the fresh, artisan products our customers 
                      have come to love and trust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
                  alt="Master baker kneading dough"
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                  OUR VALUES
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    QUALITY
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We source only the finest ingredients and maintain the highest standards
                    in every step of our baking process.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    FRESHNESS
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Everything is baked fresh daily using traditional methods that have been
                    perfected over decades of experience.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">
                    COMMUNITY
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We're proud to be part of the local community, supporting local farmers
                    and bringing people together through great food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                  MEET THE TEAM
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Our passionate team of bakers and artisans work together to create
                  exceptional products every single day.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="text-center">
                  <div className="mb-6">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Head Baker"
                      className="object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-lg"
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black">
                      JAMES MILLER
                    </h3>
                    <p className="text-gray-600">
                      Head Baker & Founder
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=305&h=305&fit=crop&crop=face"
                      alt="Pastry Chef"
                      className="object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-lg"
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black">
                      SARAH CHEN
                    </h3>
                    <p className="text-gray-600">
                      Pastry Chef
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="mb-6">
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                      alt="Operations Manager"
                      className="object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-lg"
                      width={300}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-black">
                      MICHAEL TORRES
                    </h3>
                    <p className="text-gray-600">
                      Operations Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="nike-section bg-black text-white">
          <div className="nike-container text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="nike-heading-lg text-white">
                TASTE THE DIFFERENCE
              </h2>
              <p className="nike-body-lg text-gray-300 max-w-2xl mx-auto">
                Experience the passion and craftsmanship that goes into every product we make.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
