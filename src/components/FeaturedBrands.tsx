
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FeaturedBrands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands = [
    { name: 'Bosch', category: 'Power Tools' },
    { name: 'Stanley', category: 'Hand Tools' },
    { name: 'Makita', category: 'Power Tools' },
    { name: 'Hilti', category: 'Construction Tools' },
    { name: 'DeWalt', category: 'Power Tools' },
    { name: 'Festool', category: 'Professional Tools' },
    { name: '3M', category: 'Safety Equipment' },
    { name: 'Honeywell', category: 'Safety & Security' },
    { name: 'Siemens', category: 'Industrial Equipment' },
    { name: 'Schneider Electric', category: 'Electrical' },
    { name: 'Parker', category: 'Motion & Control' },
    { name: 'SKF', category: 'Bearings & Seals' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(brands.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [brands.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(brands.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(brands.length / 4)) % Math.ceil(brands.length / 4));
  };

  const getBrandsForSlide = (slideIndex: number) => {
    const startIndex = slideIndex * 4;
    return brands.slice(startIndex, startIndex + 4);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Featured Brands
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto">
            We partner with world's leading industrial brands to bring you 
            quality products and reliable solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Content */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {getBrandsForSlide(slideIndex).map((brand, brandIndex) => (
                      <div 
                        key={brandIndex}
                        className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-lg p-8 text-center group cursor-pointer"
                      >
                        {/* Brand Logo Placeholder */}
                        <div className="bg-white rounded-lg p-6 mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                          <div className="h-12 bg-gradient-to-r from-navy to-industrial rounded flex items-center justify-center">
                            <span className="font-montserrat font-bold text-white text-lg">
                              {brand.name.substring(0, 2)}
                            </span>
                          </div>
                        </div>
                        
                        {/* Brand Info */}
                        <h4 className="font-montserrat font-semibold text-lg text-navy mb-1 group-hover:text-yellow transition-colors">
                          {brand.name}
                        </h4>
                        <p className="font-open-sans text-sm text-industrial">
                          {brand.category}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg border h-12 w-12 p-0"
          >
            <ChevronLeft className="h-5 w-5 text-navy" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg border h-12 w-12 p-0"
          >
            <ChevronRight className="h-5 w-5 text-navy" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(brands.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-navy' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Brand Partnership CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="font-montserrat font-semibold text-2xl text-navy mb-4">
            Authorized Dealer Network
          </h3>
          <p className="font-open-sans text-industrial mb-6 max-w-2xl mx-auto">
            As authorized dealers for these premium brands, we guarantee authentic products, 
            warranty support, and competitive pricing.
          </p>
          <Button className="bg-yellow hover:bg-yellow/90 text-navy font-medium">
            View All Brands
          </Button>
        </div>
      </div>
    </section>
  );
};
