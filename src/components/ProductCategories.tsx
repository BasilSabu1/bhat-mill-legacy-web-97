
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Cog, 
  Hammer, 
  Settings, 
  Zap, 
  Shield,
  ShoppingCart,
  Plus,
  Minus
} from 'lucide-react';

export const ProductCategories = () => {
  const [enquiryCart, setEnquiryCart] = useState<{[key: string]: number}>({});

  const categories = [
    {
      id: 'fasteners',
      name: 'Fasteners & Hardware',
      icon: Settings,
      description: 'Bolts, nuts, screws, washers, and specialty fasteners',
      products: ['Hex Bolts', 'Socket Screws', 'Washers', 'Threaded Rods'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop'
    },
    {
      id: 'valves',
      name: 'Valves & Fittings',
      icon: Cog,
      description: 'Industrial valves, pipe fittings, and flow control',
      products: ['Ball Valves', 'Gate Valves', 'Pipe Fittings', 'Flanges'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop'
    },
    {
      id: 'tools',
      name: 'Hand Tools',
      icon: Hammer,
      description: 'Professional grade hand tools and equipment',
      products: ['Wrenches', 'Screwdrivers', 'Pliers', 'Measuring Tools'],
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop'
    },
    {
      id: 'power-tools',
      name: 'Power Tools',
      icon: Zap,
      description: 'Electric and pneumatic power tools',
      products: ['Drills', 'Grinders', 'Saws', 'Impact Wrenches'],
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop'
    },
    {
      id: 'safety',
      name: 'Safety Equipment',
      icon: Shield,
      description: 'Personal protective equipment and safety gear',
      products: ['Hard Hats', 'Safety Glasses', 'Gloves', 'Harnesses'],
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop'
    },
    {
      id: 'maintenance',
      name: 'Maintenance Supplies',
      icon: Wrench,
      description: 'Lubricants, cleaning supplies, and maintenance items',
      products: ['Lubricants', 'Cleaners', 'Adhesives', 'Gaskets'],
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop'
    }
  ];

  const addToEnquiry = (categoryId: string) => {
    setEnquiryCart(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] || 0) + 1
    }));
  };

  const removeFromEnquiry = (categoryId: string) => {
    setEnquiryCart(prev => ({
      ...prev,
      [categoryId]: Math.max((prev[categoryId] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(enquiryCart).reduce((sum, count) => sum + count, 0);
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Product Categories
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto mb-8">
            Comprehensive range of industrial supplies from trusted brands. 
            Add items to your enquiry cart for bulk quotations.
          </p>
          
          {/* Enquiry Cart Summary */}
          {getTotalItems() > 0 && (
            <div className="inline-flex items-center bg-yellow/10 border border-yellow/20 rounded-lg px-4 py-2">
              <ShoppingCart className="h-5 w-5 text-yellow mr-2" />
              <span className="font-open-sans text-navy">
                {getTotalItems()} categories in enquiry cart
              </span>
              <Button 
                size="sm" 
                className="ml-4 bg-yellow hover:bg-yellow/90 text-navy"
              >
                Submit Enquiry
              </Button>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const itemCount = enquiryCart[category.id] || 0;
            
            return (
              <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  {/* Category Image */}
                  <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 bg-navy/80 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-yellow text-navy font-medium">
                        Industrial Grade
                      </Badge>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl text-navy mb-2 group-hover:text-yellow transition-colors">
                      {category.name}
                    </h3>
                    <p className="font-open-sans text-industrial text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Product List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.products.map((product, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>

                    {/* Enquiry Actions */}
                    <div className="flex items-center justify-between">
                      {itemCount > 0 ? (
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromEnquiry(category.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-montserrat font-medium text-navy">
                            {itemCount}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => addToEnquiry(category.id)}
                            className="h-8 w-8 p-0 bg-yellow hover:bg-yellow/90 text-navy"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          onClick={() => addToEnquiry(category.id)}
                          className="bg-navy hover:bg-navy/90 text-white"
                        >
                          Add to Enquiry
                        </Button>
                      )}
                      
                      <Button variant="ghost" className="text-industrial hover:text-navy">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="font-open-sans text-industrial mb-6">
            Can't find what you're looking for? We stock over 10,000+ products.
          </p>
          <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
            View Complete Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};
