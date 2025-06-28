import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PlusCircle,
  Package,
  Users,
  DollarSign,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { mockProducts } from "@/lib/data";

export default function AdminDashboard() {
  // Mock admin stats
  const stats = [
    {
      title: "Total Products",
      value: mockProducts.length,
      change: "+2 this week",
      icon: Package,
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+12% from last month",
      icon: TrendingUp,
    },
    {
      title: "Revenue",
      value: "$4,250",
      change: "+8% from last month",
      icon: DollarSign,
    },
    {
      title: "Customers",
      value: "89",
      change: "+5 new this week",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="container py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-4xl font-bold text-bakery-dark mb-2">
              Admin Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your bakery products and orders
            </p>
          </div>
          <Button size="lg" className="gap-2">
            <PlusCircle className="h-5 w-5" />
            Add New Product
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Management */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-bakery-dark">
              Product Management
            </h2>
            <div className="flex gap-2">
              <Button variant="outline">Import Products</Button>
              <Button variant="outline">Export Data</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProducts.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="font-medium">
                            ${product.price.toFixed(2)}
                          </span>
                          <Badge
                            variant={
                              product.isAvailable ? "default" : "destructive"
                            }
                          >
                            {product.isAvailable ? "Available" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Placeholder sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Order management coming soon...</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Customer analytics coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
