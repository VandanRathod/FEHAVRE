import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Menu, User, LogIn } from "lucide-react";
import { cn } from "@/lib/utils";
import "./header-animations.css";

interface HeaderProps {
  cartItemCount?: number;
  isAuthenticated?: boolean;
  userRole?: "customer" | "admin";
}

export function Header({
  cartItemCount = 0,
  isAuthenticated = false,
  userRole = "customer",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <header className="backdrop-blur-lg bg-background/80 border-b border-border sticky top-0 z-50 safe-area-top transition-all duration-300">
      <div className="container-responsive flex h-16 xs:h-18 sm:h-20 items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center min-w-[120px]">
          <Link to="/" className="flex items-center group min-w-touch min-h-touch">
            <img
              src="/images/bakery/logo/havre-logo.png"
              alt="Havre Bakery Logo"
              className="h-10 w-auto sm:h-12 md:h-14 object-contain transition-all duration-200"
              style={{ maxWidth: '120px' }}
            />
          </Link>
        </div>
        {/* Center: Brand Name */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center pointer-events-none select-none">
          <span className="text-xl xs:text-2xl sm:text-3xl font-black tracking-tight text-foreground">HAVRE</span>
        </div>
        {/* Right: Navigation and Actions */}
        <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 ml-auto">
          {/* Enhanced Desktop Navigation with better touch targets */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "nav-link-animated text-sm lg:text-base xl:text-lg font-medium py-3 px-2 lg:px-3 min-h-touch flex items-center",
                  isCurrentPath(item.href)
                    ? "active"
                    : "text-gray-700",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Enhanced Actions with consistent sizing */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
            {/* Enhanced Cart Button with consistent sizing */}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="relative w-12 h-12 xs:w-14 xs:h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 p-0 rounded-xl flex items-center justify-center transition-all duration-200"
            >
              <Link to="/cart" className={cn(
                "flex items-center justify-center w-full h-full nav-link-animated",
                // location.pathname === "/cart" ? "active" : ""
              )}>
                <ShoppingCart className="h-7 w-7 xs:h-8 xs:w-8 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
                {cartItemCount > 0 && (
                  <Badge
                    className="absolute -top-3 -right-2 xs:-top-1 xs:-right-2 sm:-top-2 sm:-right-2 md:-top-2 md:-right-2 h-5 w-5 xs:h-6 xs:w-6 flex items-center justify-center p-0 text-xs xs:text-sm bg-red-600 text-white rounded-full font-bold min-w-[20px] min-h-[20px] xs:min-w-[24px] xs:min-h-[24px] z-20 border-2 border-white shadow"
                  >
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </Badge>
                )}
                <span className="sr-only">Shopping cart with {cartItemCount} items</span>
              </Link>
            </Button>

            {/* Enhanced Auth Actions with better responsive design */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                {userRole === "admin" && (
                  <Button
                    size="sm"
                    className="h-10 xs:h-12 sm:h-11 md:h-12 text-sm lg:text-base px-3 lg:px-4"
                    asChild
                  >
                    <Link to="/admin" className="flex items-center justify-center h-full">Admin</Link>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-12 h-12 xs:w-14 xs:h-14 sm:w-12 sm:h-12 md:w-14 md:h-14 p-0 rounded-xl hover:bg-muted transition-colors duration-200"
                  asChild
                >
                  <Link to="/profile" className="flex items-center justify-center h-full w-full">
                    <User className="h-7 w-7 xs:h-8 xs:w-8 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 xs:h-12 sm:h-11 md:h-12 text-sm lg:text-base px-3 lg:px-4 rounded-lg hover:bg-muted transition-colors duration-200"
                  asChild
                >
                  <Link to="/login" className="flex items-center h-full">
                    <LogIn className="h-4 w-4 mr-2 md:mr-1 lg:mr-2" />
                    <span className="hidden lg:inline">Sign In</span>
                    <span className="lg:hidden">Sign In</span>
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="h-10 xs:h-12 sm:h-11 md:h-12 text-sm lg:text-base px-3 lg:px-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <Link to="/signup" className="flex items-center justify-center h-full">Join Us</Link>
                </Button>
              </div>
            )}

            {/* Enhanced Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden w-10 h-10 xs:w-12 xs:h-12 sm:w-11 sm:h-11 p-0 rounded-lg flex items-center justify-center hover:bg-muted transition-colors duration-200"
                  size="sm"
                >
                  <Menu className="h-7 w-7 xs:h-8 xs:w-8 sm:h-7 sm:w-7 md:h-8 md:w-8 text-foreground" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] xs:w-[320px] sm:w-[360px] bg-background border-l border-border safe-area-right"
              >
                <nav className="flex flex-col space-y-2 pt-6 pb-4">
                  <div className="pb-6 border-b border-border">
                    <span className="text-xl xs:text-2xl font-black text-foreground tracking-tight">
                      HAVRE
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">Artisan Bakery</p>
                  </div>

                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "nav-link-animated flex text-lg font-medium py-4 px-4 min-h-touch items-center",
                        isCurrentPath(item.href)
                          ? "active"
                          : "text-foreground",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-6 border-t border-border space-y-3">
                    {isAuthenticated ? (
                      <>
                        {userRole === "admin" && (
                          <Button
                            className="w-full min-h-touch text-lg font-medium py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                            asChild
                          >
                            <Link
                              to="/admin"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center justify-center"
                            >
                              Admin Dashboard
                            </Link>
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          className="w-full min-h-touch text-lg font-medium justify-start py-4 px-4 rounded-xl hover:bg-muted"
                          asChild
                        >
                          <Link
                            to="/profile"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center"
                          >
                            <User className="h-5 w-5 mr-3" />
                            Profile
                          </Link>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          className="w-full min-h-touch text-lg font-medium py-4 rounded-xl hover:bg-muted"
                          asChild
                        >
                          <Link
                            to="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center"
                          >
                            <LogIn className="h-5 w-5 mr-2" />
                            Sign In
                          </Link>
                        </Button>
                        <Button
                          className="w-full min-h-touch text-lg font-medium py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
                          asChild
                        >
                          <Link
                            to="/signup"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center"
                          >
                            Join Us
                          </Link>
                        </Button>
                      </>
                    )}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
