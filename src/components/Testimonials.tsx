import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

// Reusable AnimatedCounter component (can be moved to a separate file if used elsewhere)
const AnimatedCounter = ({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(target); // Ensure we end exactly at the target
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target, duration]);

  return (
    <div ref={counterRef}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Plant Manager',
      company: 'Kochi Marine Engineering Ltd.',
      content:
        'Krishna Bhat Mill Stores has been our trusted partner for over 15 years. Their quality products and timely delivery have never let us down, even during critical project deadlines.',
      rating: 5,
      industry: 'Marine Engineering',
    },
    {
      name: 'Priya Nair',
      position: 'Procurement Head',
      company: 'Techno Construction Co.',
      content:
        'The technical expertise and product knowledge of their team is outstanding. They always recommend the right solutions for our construction projects, helping us maintain quality standards.',
      rating: 5,
      industry: 'Construction',
    },
    {
      name: 'Mohammed Rashid',
      position: 'Operations Director',
      company: 'Kerala Shipyard Limited',
      content:
        'From small fasteners to heavy-duty equipment, Krishna Bhat Mill Stores consistently delivers. Their emergency supply service has saved our operations multiple times.',
      rating: 5,
      industry: 'Shipbuilding',
    },
    {
      name: 'Suresh Menon',
      position: 'Maintenance Manager',
      company: 'Cochin Port Trust',
      content:
        'Three generations of reliable service! The quality assurance and after-sales support make them our preferred industrial supplier. Highly recommended for all industrial needs.',
      rating: 5,
      industry: 'Port Operations',
    },
    {
      name: 'Dr. Lakshmi Devi',
      position: 'Project Coordinator',
      company: 'FACT (Fertilizers)',
      content:
        "Their vast inventory and quick response time are impressive. Whether it's routine maintenance or emergency requirements, they always deliver on time with quality products.",
      rating: 5,
      industry: 'Chemical/Fertilizer',
    },
    {
      name: 'Thomas George',
      position: 'Site Engineer',
      company: 'L&T Construction',
      content:
        'Professional service with competitive pricing. Their technical support team helps us select the right products for our specific applications. Excellent partnership for 10+ years.',
      rating: 5,
      industry: 'Infrastructure',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow fill-yellow' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-navy mb-4">
            Client Testimonials
          </h2>
          <p className="font-open-sans text-lg text-industrial max-w-2xl mx-auto">
            Hear from Kerala's leading industries about their experience 
            partnering with Krishna Bhat Mill Stores.
          </p>
        </div> */}

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-yellow opacity-60" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <blockquote className="font-open-sans text-industrial leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-montserrat font-semibold text-navy text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="font-open-sans text-industrial text-sm">
                        {testimonial.position}
                      </p>
                      <p className="font-open-sans text-industrial text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="bg-yellow/10 text-yellow px-3 py-1 rounded-full">
                      <span className="font-open-sans text-xs font-medium">
                        {testimonial.industry}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Trust Statistics */}
        <div className=" bg-navy text-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-montserrat font-bold text-2xl lg:text-3xl mb-4">
              Trusted by Kerala's Leading Industries
            </h3>
            <p className="font-open-sans text-white/90 max-w-2xl mx-auto">
              78 years of building relationships and delivering excellence
              across diverse industrial sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={50000} duration={1500} suffix="+" />
              </div>
              <div className="font-open-sans text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={98} duration={1200} suffix="%" />
              </div>
              <div className="font-open-sans text-white/80">
                Client Retention
              </div>
            </div>
            <div>
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={50} duration={1000} suffix="+" />
              </div>
              <div className="font-open-sans text-white/80">
                Industry Sectors
              </div>
            </div>
            <div>
              {/* <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                24/7
              </div>
              <div className="font-open-sans text-white/80">
                Support Available
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
