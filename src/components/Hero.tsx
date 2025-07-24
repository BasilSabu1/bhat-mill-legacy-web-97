import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

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

    const counterElement = document.querySelector("#counter-" + target);
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, [target, duration]);

  return <span id={`counter-${target}`}>{count.toLocaleString()}+</span>;
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-navy to-navy/90 text-white py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heritage Badge */}
          <div className="inline-flex items-center bg-yellow/20 text-yellow px-4 py-2 rounded-full mb-6">
            <span className="font-montserrat font-medium text-sm">
              Est. 1946 • 78+ Years of Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Supplying Industry
            <span className="text-yellow block">Since 1946</span>
          </h1>

          {/* Subheading */}
          <p className="font-open-sans text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Kerala's trusted source for premium industrial supplies, fasteners,
            valves, and hand tools. Three generations of reliability and quality
            service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-yellow hover:bg-yellow/90 text-navy font-montserrat font-semibold text-lg px-8 py-4 h-auto group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-navy hover:bg-white hover:text-navy font-montserrat font-semibold text-lg px-8 py-4 h-auto group"
              onClick={() => {
                const productsSection = document.querySelector("#products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              
              <ShoppingCart className="mr-2 h-5 w-5" />
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={10000} duration={2000} />
              </div>
              <div className="font-open-sans text-white/80">
                Products Available
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={5000} duration={1500} />
              </div>
              <div className="font-open-sans text-white/80">
                Satisfied Customers
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={24} duration={1000} />
              </div>
              <div className="font-open-sans text-white/80">Quick Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
