import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useCart } from "@/lib/cart-context";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { itemCount } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Nike-style Hero Section */}
        <section className="nike-section bg-white">
          <div className="nike-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="nike-heading-xl text-black">
                GET IN TOUCH
              </h1>
              <p className="nike-body-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or want to place a custom order? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="nike-section bg-white">
          <div className="nike-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
                <div className="space-y-8">
                  <h2 className="nike-heading-lg text-black">
                    VISIT US
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="nike-heading-sm text-black mb-2">
                          LOCATION
                        </h3>
                        <p className="text-gray-600">
                          123 Bakery Street<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="nike-heading-sm text-black mb-2">
                          PHONE
                        </h3>
                        <p className="text-gray-600">
                          <a href="tel:+1234567890" className="hover:text-black transition-colors duration-200">
                            (123) 456-7890
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="nike-heading-sm text-black mb-2">
                          EMAIL
                        </h3>
                        <p className="text-gray-600">
                          <a href="mailto:hello@havre.com" className="hover:text-black transition-colors duration-200">
                            hello@havre.com
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="nike-heading-sm text-black mb-2">
                          HOURS
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                          <p>Saturday - Sunday: 7:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Store Image */}
                <div className="relative">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1555507036-ab794f0eedc4?w=600&h=400&fit=crop&crop=center"
                    alt="HAVRE Bakery storefront"
                    className="object-cover w-full h-[400px]"
                    // width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <h2 className="nike-heading-lg text-black">
                  SEND MESSAGE
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-black font-medium mb-2 block">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="nike-input"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-black font-medium mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="nike-input"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-black font-medium mb-2 block">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="nike-input"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-black font-medium mb-2 block">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="flex w-full border-0 border-b border-gray-300 bg-transparent px-0 py-4 text-base text-black placeholder:text-gray-500 focus:border-black focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="nike-section bg-nike-gray-light">
          <div className="nike-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="nike-heading-lg text-black">
                FIND US
              </h2>
              
              {/* Placeholder for map - in a real app, you'd integrate with Google Maps or similar */}
              <div className="bg-gray-300 h-96 flex items-center justify-center">
                <p className="text-gray-600">
                  Interactive Map Coming Soon
                </p>
              </div>
              
              <p className="nike-body text-gray-600">
                Located in the heart of downtown, we're easily accessible by public transport 
                and have parking available nearby.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="nike-section bg-black text-white">
          <div className="nike-container text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="nike-heading-lg text-white">
                READY TO ORDER?
              </h2>
              <p className="nike-body-lg text-gray-300 max-w-2xl mx-auto">
                Browse our full selection of fresh, artisan baked goods available for pickup or delivery.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
