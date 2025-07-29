import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ShoppingCart,
  Wrench,
  Hammer,
  Settings,
  Zap,
  Cog,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

    const counterElement = document.querySelector('#counter-' + target);
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

const FloatingTool = ({
  icon: Icon,
  delay = 0,
  duration = 3000,
  x = 50,
  y = 50,
  size = 24,
}: {
  icon: any;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  size?: number;
}) => {
  return (
    <div
      className="absolute text-yellow/30 animate-pulse"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      <div
        className="animate-bounce"
        style={{
          animationDelay: `${delay + 500}ms`,
          animationDuration: `${duration + 1000}ms`,
        }}
      >
        <Icon size={size} />
      </div>
    </div>
  );
};

const ToolsAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Left Side Tools */}
      <FloatingTool icon={Wrench} delay={0} x={10} y={20} size={28} />
      <FloatingTool icon={Hammer} delay={1000} x={25} y={40} size={32} />
      <FloatingTool icon={Settings} delay={2000} x={15} y={60} size={24} />
      <FloatingTool icon={Cog} delay={3000} x={20} y={75} size={30} />
      <FloatingTool icon={Zap} delay={500} x={35} y={50} size={22} />
      <FloatingTool icon={Wrench} delay={2500} x={8} y={45} size={20} />
      <FloatingTool icon={Settings} delay={1800} x={32} y={70} size={18} />

      {/* Right Side Tools */}
      <FloatingTool icon={Hammer} delay={1200} x={75} y={25} size={26} />
      <FloatingTool icon={Zap} delay={2200} x={85} y={45} size={24} />
      <FloatingTool icon={Cog} delay={800} x={70} y={65} size={28} />
      <FloatingTool icon={Settings} delay={3200} x={90} y={35} size={20} />
      <FloatingTool icon={Wrench} delay={1600} x={80} y={80} size={22} />
      <FloatingTool icon={Hammer} delay={2800} x={75} y={55} size={18} />
      <FloatingTool icon={Zap} delay={400} x={85} y={75} size={25} />

      {/* Center/Top Tools */}
      <FloatingTool icon={Settings} delay={1400} x={50} y={15} size={24} />
      <FloatingTool icon={Cog} delay={2400} x={60} y={25} size={20} />
      <FloatingTool icon={Wrench} delay={3400} x={45} y={35} size={22} />

      {/* Bottom Center Tools */}
      <FloatingTool icon={Hammer} delay={1100} x={55} y={85} size={26} />
      <FloatingTool icon={Zap} delay={2100} x={40} y={90} size={20} />
      <FloatingTool icon={Settings} delay={3100} x={65} y={95} size={18} />

      {/* Additional scattered tools for fuller coverage */}
      <FloatingTool icon={Cog} delay={600} x={5} y={30} size={16} />
      <FloatingTool icon={Wrench} delay={1700} x={95} y={20} size={14} />
      <FloatingTool icon={Hammer} delay={2700} x={12} y={85} size={20} />
      <FloatingTool icon={Zap} delay={3700} x={88} y={90} size={16} />
      <FloatingTool icon={Settings} delay={900} x={3} y={55} size={18} />
      <FloatingTool icon={Cog} delay={1900} x={97} y={60} size={22} />

      {/* Very subtle background tools */}
      <FloatingTool icon={Wrench} delay={4000} x={22} y={28} size={12} />
      <FloatingTool icon={Hammer} delay={4500} x={78} y={42} size={14} />
      <FloatingTool icon={Settings} delay={5000} x={18} y={88} size={10} />
      <FloatingTool icon={Zap} delay={5500} x={82} y={12} size={12} />

      {/* Animated circles for depth - distributed across the background */}
      <div
        className="absolute w-32 h-32 border border-yellow/20 rounded-full animate-spin left-16 top-1/4"
        style={{ animationDuration: '20s' }}
      ></div>
      <div
        className="absolute w-24 h-24 border border-yellow/10 rounded-full animate-spin left-8 top-1/2"
        style={{ animationDuration: '15s', animationDirection: 'reverse' }}
      ></div>
      <div
        className="absolute w-16 h-16 border border-yellow/15 rounded-full animate-spin left-20 bottom-1/4"
        style={{ animationDuration: '12s' }}
      ></div>

      {/* Right side circles */}
      <div
        className="absolute w-28 h-28 border border-yellow/15 rounded-full animate-spin right-20 top-1/3"
        style={{ animationDuration: '18s' }}
      ></div>
      <div
        className="absolute w-20 h-20 border border-yellow/10 rounded-full animate-spin right-12 bottom-1/3"
        style={{ animationDuration: '14s', animationDirection: 'reverse' }}
      ></div>
      <div
        className="absolute w-36 h-36 border border-yellow/5 rounded-full animate-spin right-32 top-1/2"
        style={{ animationDuration: '25s' }}
      ></div>

      {/* Center circles */}
      <div
        className="absolute w-40 h-40 border border-yellow/5 rounded-full animate-spin left-1/2 top-1/4 transform -translate-x-1/2"
        style={{ animationDuration: '30s' }}
      ></div>
      <div
        className="absolute w-18 h-18 border border-yellow/20 rounded-full animate-spin left-1/2 bottom-1/3 transform -translate-x-1/2"
        style={{ animationDuration: '10s', animationDirection: 'reverse' }}
      ></div>
    </div>
  );
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

      {/* Full Background Tools Animation */}
      <ToolsAnimation />

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
                const productsSection = document.querySelector('#products');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={100000} duration={2000} />
              </div>
              <div className="font-open-sans text-white/80">
                Products Available
              </div>
            </div>
            <div className="text-center">
              <div className="font-montserrat font-bold text-3xl text-yellow mb-2">
                <AnimatedCounter target={50000} duration={1500} />
              </div>
              <div className="font-open-sans text-white/80">
                Satisfied Customers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
