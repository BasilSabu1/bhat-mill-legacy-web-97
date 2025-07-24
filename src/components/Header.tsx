import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Animation styles */}
      <style >{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @media (hover: hover) {
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="bg-navy text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Desktop View - Normal Layout */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91 98471 80012</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>info@krishnabhatmillstores.com</span>
              </div>
            </div>
            <div className="text-xs">
              GSTIN: 32ABCDE1234F1Z5
            </div>
          </div>

          {/* Mobile View - Animated Marquee */}
          <div className="md:hidden w-full">
            <div className="flex items-center animate-marquee whitespace-nowrap">
              <div className="flex items-center space-x-1 mr-8">
                <Phone className="h-3 w-3" />
                <span>+91 98471 80012</span>
              </div>
              <div className="flex items-center space-x-1 mr-8">
                <Mail className="h-3 w-3" />
                <span>info@krishnabhatmillstores.com</span>
              </div>
              <div className="text-xs mr-8">
                GSTIN: 32ABCDE1234F1Z5
              </div>
              {/* Duplicate for seamless looping */}
              <div className="flex items-center space-x-1 mr-8">
                <Phone className="h-3 w-3" />
                <span>+91 98471 80012</span>
              </div>
              <div className="flex items-center space-x-1 mr-8">
                <Mail className="h-3 w-3" />
                <span>info@krishnabhatmillstores.com</span>
              </div>
              <div className="text-xs mr-8">
                GSTIN: 32ABCDE1234F1Z5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the header remains unchanged */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
         <a href="/" className="flex items-center space-x-3">
  <div className="bg-navy text-white p-2 rounded-lg">
    <span className="font-montserrat font-bold text-xl">KB</span>
  </div>
  <div>
    <h1 className="font-montserrat font-bold text-xl text-navy leading-tight">
      Krishna Bhat Mill Stores
    </h1>
    <p className="text-industrial text-sm font-open-sans">Since 1946</p>
  </div>
</a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-open-sans text-industrial hover:text-navy transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-yellow hover:bg-yellow/90 text-navy font-medium">
              Request Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block font-open-sans text-industrial hover:text-navy"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-yellow hover:bg-yellow/90 text-navy font-medium">
              Request Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};