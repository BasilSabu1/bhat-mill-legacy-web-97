import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import ProductCategories from '../components/ProductCategories';
import { Services } from '@/components/Services';
import { FeaturedBrands } from '@/components/FeaturedBrands';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductCategories />
      <Services />
      <FeaturedBrands />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
