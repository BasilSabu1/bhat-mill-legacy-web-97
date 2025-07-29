import {
  Truck,
  HeadphonesIcon,
  Wrench,
  FileText,
  Clock,
  MapPin,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description:
        'Same-day delivery in Kochi, 24-48 hours across Kerala. Express delivery for urgent requirements.',
      features: [
        'Same-day delivery in Kochi',
        'Express shipping available',
        'Bulk order logistics',
      ],
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description:
        'Expert guidance from our technical team with decades of industrial experience.',
      features: [
        'Product consultation',
        'Technical specifications',
        'Application guidance',
      ],
    },
    {
      icon: FileText,
      title: 'Custom Quotations',
      description:
        'Detailed quotations for bulk orders with competitive pricing and flexible terms.',
      features: [
        'Bulk pricing tiers',
        'Custom packaging',
        'Flexible payment terms',
      ],
    },
    // {
    //   icon: Wrench,
    //   title: 'Installation Support',
    //   description:
    //     'On-site installation and maintenance support for complex industrial equipment.',
    //   features: [
    //     'On-site installation',
    //     'Maintenance contracts',
    //     'Equipment training',
    //   ],
    // },
    // {
    //   icon: Clock,
    //   title: '24/7 Emergency',
    //   description: 'Round-the-clock emergency supply service for critical industrial operations.',
    //   features: ['Emergency hotline', 'Priority dispatch', 'Critical parts inventory']
    // },
    {
      icon: MapPin,
      title: 'Pan-Kerala Coverage',
      description: 'Serving industries across Kerala.',
      features: [
        // 'Multiple locations',
        // 'Regional representatives',
        // 'Local inventory hubs',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Our Services
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto">
            Comprehensive industrial supply services designed to keep your
            operations running smoothly and efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="bg-navy text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-yellow group-hover:text-navy transition-colors duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-montserrat font-semibold text-xl text-navy mb-3 group-hover:text-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-industrial mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="font-open-sans text-sm text-industrial flex items-center"
                      >
                        <div className="w-2 h-2 bg-yellow rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Promise */}
        <div className="mt-16 bg-navy text-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-montserrat font-bold text-2xl lg:text-3xl mb-4">
            Our Service Promise
          </h3>
          <p className="font-open-sans text-lg text-white/90 max-w-3xl mx-auto mb-8">
            With 78 years of industrial expertise, we understand that your
            success depends on reliable supply chains. That's why we've built
            our services around your needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                99.5%
              </div>
              <div className="font-open-sans text-white/80">
                On-time Delivery
              </div>
            </div>
            {/* <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                24hrs
              </div>
              <div className="font-open-sans text-white/80">Response Time</div>
            </div> */}
            <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                100%
              </div>
              <div className="font-open-sans text-white/80">
                Quality Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
