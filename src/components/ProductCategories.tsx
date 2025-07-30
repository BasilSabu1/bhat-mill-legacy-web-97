import { useState, useEffect } from 'react';
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
  Minus,
  X,
  Star,
  Truck,
  Award,
  CheckCircle,
} from 'lucide-react';

export default function ProductCategories() {
  const [enquiryCart, setEnquiryCart] = useState<{ [key: string]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount or modal close
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const categories = [
    {
      id: 'fasteners',
      name: 'Fasteners & Hardware',
      icon: Settings,
      description: 'Bolts, nuts, screws, washers, and specialty fasteners',
      products: ['Hex Bolts', 'Socket Screws', 'Washers', 'Threaded Rods'],
      image: '/images/Hardware.jpg',
      fullDescription:
        'Comprehensive range of high-quality fasteners and hardware components designed for industrial applications. Our fasteners meet international standards including ISO, DIN, and ANSI specifications.',
      detailedProducts: [
        {
          name: 'Hex Bolts',
          specs: 'M6-M36, Grade 8.8-12.9, Zinc Plated',
          price: 'From ₹2.50/piece',
        },
        {
          name: 'Socket Head Cap Screws',
          specs: 'M3-M20, Alloy Steel, Black Oxide',
          price: 'From ₹3.20/piece',
        },
        {
          name: 'Spring Washers',
          specs: 'M4-M24, Stainless Steel 316',
          price: 'From ₹0.80/piece',
        },
        {
          name: 'Threaded Rods',
          specs: '6mm-25mm dia, A4 Grade, 1m length',
          price: 'From ₹45.00/meter',
        },
      ],
      certifications: ['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001'],
      brands: ['Unbrako', 'Sundram', 'Precision', 'Hi-Tech'],
      applications: ['Automotive', 'Construction', 'Machinery', 'Marine'],
    },
    {
      id: 'valves',
      name: 'Valves & Fittings',
      icon: Cog,
      description: 'Industrial valves, pipe fittings, and flow control',
      products: ['Ball Valves', 'Gate Valves', 'Pipe Fittings', 'Flanges'],
      image: '/images/Valves.jpg',
      fullDescription:
        'Premium quality valves and fittings for fluid control systems. Suitable for water, oil, gas, and chemical applications with pressure ratings up to 40 bar.',
      detailedProducts: [
        {
          name: 'Ball Valves',
          specs: '1/2" to 6", Brass/SS316, Full Port',
          price: 'From ₹285.00/piece',
        },
        {
          name: 'Gate Valves',
          specs: '1/2" to 8", Cast Iron, Rising Stem',
          price: 'From ₹450.00/piece',
        },
        {
          name: 'Pipe Fittings',
          specs: 'NPT/BSP, Forged Steel, 3000 PSI',
          price: 'From ₹125.00/piece',
        },
        {
          name: 'Flanges',
          specs: 'ANSI B16.5, RF/FF, A105 Carbon Steel',
          price: 'From ₹320.00/piece',
        },
      ],
      certifications: ['API 6D', 'CE Marking', 'IBR Approved'],
      brands: ['L&T Valves', 'Forbes Marshall', 'Audco', 'Flowserve'],
      applications: [
        'Process Industries',
        'Power Plants',
        'Oil & Gas',
        'Water Treatment',
      ],
    },
    {
      id: 'tools',
      name: 'Hand Tools',
      icon: Hammer,
      description: 'Professional grade hand tools and equipment',
      products: ['Wrenches', 'Screwdrivers', 'Pliers', 'Measuring Tools'],
      image: '/images/Hand.jpg',
      fullDescription:
        'Professional grade hand tools engineered for durability and precision. Ergonomically designed for comfort during extended use with lifetime warranty on select products.',
      detailedProducts: [
        {
          name: 'Combination Wrenches',
          specs: '8mm-32mm, Chrome Vanadium, 12-Point',
          price: 'From ₹125.00/piece',
        },
        {
          name: 'Screwdriver Sets',
          specs: 'Phillips/Slotted, Magnetic Tips, 6-piece',
          price: 'From ₹450.00/set',
        },
        {
          name: 'Long Nose Pliers',
          specs: '6"-8", Drop Forged, Insulated Handle',
          price: 'From ₹185.00/piece',
        },
        {
          name: 'Digital Calipers',
          specs: '0-150mm, ±0.02mm Accuracy, IP54',
          price: 'From ₹850.00/piece',
        },
      ],
      certifications: ['IS 3558', 'DIN Standards', 'ISO Compliant'],
      brands: ['Stanley', 'Taparia', 'Jhalani', 'Kennedy'],
      applications: [
        'Maintenance',
        'Assembly',
        'Fabrication',
        'Automotive Service',
      ],
    },
    {
      id: 'power-tools',
      name: 'Power Tools',
      icon: Zap,
      description: 'Electric and pneumatic power tools',
      products: ['Drills', 'Grinders', 'Saws', 'Impact Wrenches'],
      image: '/images/Power.jpg',
      fullDescription:
        'High-performance power tools for industrial and professional use. Features brushless motors, advanced battery technology, and precision engineering for maximum productivity.',
      detailedProducts: [
        {
          name: 'Cordless Drill Driver',
          specs: '18V Li-ion, 13mm Chuck, 65Nm Torque',
          price: 'From ₹4,500.00/piece',
        },
        {
          name: 'Angle Grinders',
          specs: '4.5"-9", 850W-2400W, Variable Speed',
          price: 'From ₹1,250.00/piece',
        },
        {
          name: 'Circular Saws',
          specs: '7.25", 1800W, Laser Guide, 65mm Depth',
          price: 'From ₹6,500.00/piece',
        },
        {
          name: 'Impact Wrenches',
          specs: '1/2" Drive, 400Nm Torque, Pneumatic',
          price: 'From ₹8,500.00/piece',
        },
      ],
      certifications: ['CE Certified', 'ISI Mark', 'UL Listed'],
      brands: ['Bosch', 'Makita', 'DeWalt', 'Hilti'],
      applications: [
        'Construction',
        'Manufacturing',
        'Automotive',
        'Maintenance',
      ],
    },
    {
      id: 'safety',
      name: 'Safety Equipment',
      icon: Shield,
      description: 'Personal protective equipment and safety gear',
      products: ['Hard Hats', 'Safety Glasses', 'Gloves', 'Harnesses'],
      image: '/images/Safety.jpg',
      fullDescription:
        'Comprehensive safety equipment designed to protect workers in hazardous environments. All products meet or exceed international safety standards.',
      detailedProducts: [
        {
          name: 'Safety Helmets',
          specs: 'Class G, HDPE Shell, 4-Point Suspension',
          price: 'From ₹285.00/piece',
        },
        {
          name: 'Safety Glasses',
          specs: 'Polycarbonate Lens, UV Protection, Anti-Fog',
          price: 'From ₹125.00/piece',
        },
        {
          name: 'Cut Resistant Gloves',
          specs: 'Level 5 Cut, Nitrile Palm, Size 7-11',
          price: 'From ₹185.00/pair',
        },
        {
          name: 'Fall Arrest Harness',
          specs: 'Full Body, 3 D-Rings, 140kg Capacity',
          price: 'From ₹1,850.00/piece',
        },
      ],
      certifications: ['ANSI Z89.1', 'EN 397', 'OSHA Compliant'],
      brands: ['3M', 'Honeywell', 'MSA', 'Udyogi'],
      applications: [
        'Construction',
        'Manufacturing',
        'Mining',
        'Chemical Industries',
      ],
    },
    {
      id: 'maintenance',
      name: 'Maintenance Supplies',
      icon: Wrench,
      description: 'Lubricants, cleaning supplies, and maintenance items',
      products: ['Lubricants', 'Cleaners', 'Adhesives', 'Gaskets'],
      image: '/images/Maintanance.jpg',
      fullDescription:
        'Essential maintenance supplies for equipment upkeep and facility management. High-performance products designed for industrial environments.',
      detailedProducts: [
        {
          name: 'Industrial Lubricants',
          specs: 'ISO VG 32-680, Multi-grade, 20L Pack',
          price: 'From ₹1,200.00/pack',
        },
        {
          name: 'Degreasers',
          specs: 'Heavy Duty, Biodegradable, 5L Container',
          price: 'From ₹450.00/container',
        },
        {
          name: 'Structural Adhesives',
          specs: '2-Part Epoxy, 24hr Cure, 25MPa Bond',
          price: 'From ₹285.00/tube',
        },
        {
          name: 'Gasket Sheets',
          specs: 'NBR/EPDM, 1-10mm Thick, 1m x 1m',
          price: 'From ₹85.00/sq.ft',
        },
      ],
      certifications: ['REACH Compliant', 'RoHS Certified', 'ISO 21469'],
      brands: ['Castrol', 'Shell', 'Loctite', 'Fevicol'],
      applications: [
        'Equipment Maintenance',
        'Facility Management',
        'Production Support',
        'MRO',
      ],
    },
  ];

  const addToEnquiry = (categoryId: string) => {
    setEnquiryCart(prev => ({
      ...prev,
      [categoryId]: (prev[categoryId] || 0) + 1,
    }));
  };

  const removeFromEnquiry = (categoryId: string) => {
    setEnquiryCart(prev => ({
      ...prev,
      [categoryId]: Math.max((prev[categoryId] || 0) - 1, 0),
    }));
  };

  const getTotalItems = () => {
    return Object.values(enquiryCart).reduce((sum, count) => sum + count, 0);
  };

  const openModal = (category: any) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-slate-800 mb-4">
            Product Categories
          </h2>
          <p className="font-open-sans text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Comprehensive range of industrial supplies from trusted brands. Add
            items to your enquiry cart for bulk quotations.
          </p>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="font-open-sans font-bold text-slate-900 ">
              Can't find what you're looking for? We stock over 100,000+
              products.
            </p>
          </div>

          {/* Enquiry Cart Summary */}
          {getTotalItems() > 0 && (
            <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
              <ShoppingCart className="h-5 w-5 text-amber-600 mr-2" />
              <span className="font-open-sans text-slate-800">
                {getTotalItems()} categories in enquiry cart
              </span>
              <Button
                size="sm"
                className="ml-4 bg-amber-500 hover:bg-amber-600 text-white"
              >
                Submit Enquiry
              </Button>
            </div>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => {
            const IconComponent = category.icon;
            const itemCount = enquiryCart[category.id] || 0;

            return (
              <Card
                key={category.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer group"
              >
                <CardContent className="p-0">
                  {/* Category Image */}
                  <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                    {/* <div className="absolute inset-0 bg-slate-800/80 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-white" />
                    </div> */}
                    <img
                      src={category.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-400 ease-in-out"
                    />
                    {/* <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-amber-400 text-slate-800 font-medium"
                      >
                        Industrial Grade
                      </Badge>
                    </div> */}
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="font-montserrat font-semibold text-xl text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="font-open-sans text-slate-600 text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Product List */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.products.map((product, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>

                    {/* Enquiry Actions */}
                    <div className="flex items-center justify-between">
                      {/* {itemCount > 0 ? (
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromEnquiry(category.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-montserrat font-medium text-slate-800">
                            {itemCount}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => addToEnquiry(category.id)}
                            className="h-8 w-8 p-0 bg-amber-500 hover:bg-amber-600 text-white"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : ( */}
                      <Button
                        onClick={() => openModal(category)}
                        className="bg-slate-800 hover:bg-slate-700 text-white"
                      >
                        View Details
                      </Button>
                      {/* )} */}

                      {/* <Button
                        variant="ghost"
                        className="text-slate-600 hover:text-slate-800"
                        onClick={() => openModal(category)}
                      >
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <selectedCategory.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {selectedCategory.name}
                  </h2>
                  <p className="text-slate-600">Complete Product Details</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Description */}
              {/* <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Overview
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {selectedCategory.fullDescription}
                </p>
              </div> */}

              {/* Detailed Products */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Product Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCategory.detailedProducts.map(
                    (product: any, index: number) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-slate-800">
                            {product.name}
                          </h4>
                          <Badge className="bg-green-100 text-green-800 pointer-events-none">
                            In Stock
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">
                          {product.specs}
                        </p>
                        {/* <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-800">
                            {product.price}
                          </span>
                          <Button size="sm" variant="outline">
                            Add to Enquiry
                          </Button>
                        </div> */}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Features Grid */}
              {/* <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-amber-500" />
                    Certifications
                  </h4>
                  <ul className="space-y-2">
                    {selectedCategory.certifications.map(
                      (cert: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {cert}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-amber-500" />
                    Trusted Brands
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.brands.map(
                      (brand: string, index: number) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {brand}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-amber-500" />
                    Applications
                  </h4>
                  <ul className="space-y-2">
                    {selectedCategory.applications.map(
                      (app: string, index: number) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                          {app}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div> */}

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <Button
                  className="flex-1 bg-slate-800 hover:bg-slate-700 text-white"
                  onClick={() => addToEnquiry(selectedCategory.id)}
                >
                  Add Category to Enquiry
                </Button>
                <Button variant="outline" className="flex-1">
                  Request Detailed Catalog
                </Button>
                <Button variant="ghost" onClick={closeModal}>
                  Close
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
