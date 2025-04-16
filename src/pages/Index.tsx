
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, MapPin } from 'lucide-react';
import Hero from '@/components/home/Hero';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BubbleAnimation from '@/components/animations/BubbleAnimation';
import ClothesCarousel from '@/components/animations/ClothesCarousel';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import FloatingBubbles from '@/components/animations/FloatingBubbles';
import WashingAnimations from '@/components/animations/WashingAnimations';
import OfferCarousel from '@/components/home/OfferCarousel';
import SEO from '@/components/SEO';

const Index = () => {
  // Simulate page transition animation
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add classes to trigger animations
    const body = document.body;
    body.classList.add('page-transition-in');
    
    return () => {
      body.classList.remove('page-transition-in');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Rinsee - India's Happiest Laundry and Dry Clean Brand"
        description="Premium laundry and dry cleaning services with pickup and delivery. Professional wash & fold, wash & iron, dry cleaning, and specialty garment care."
        keywords="laundry service, dry cleaning, wash and fold, wash and iron, garment care, pickup delivery"
        canonicalUrl="https://rinsee.in/"
      />
      
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <FloatingBubbles />
        <section className="py-8 bg-laundry-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-laundry-800">Quick Access Services</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700 gap-2">
                <a href="https://drive.google.com/uc?export=download&id=1JwBIDZz5GlS_f36kBeTbGcA5QfMSBDqv" target="_blank" rel="noopener noreferrer">
                  <Download size={18} />
                    Download Our App
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-laundry-600 text-laundry-600 gap-2">
                <Link to="/delhi-services" className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Laundry Services in Delhi
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <Link to="/services/wash-and-fold" className="text-laundry-600 hover:text-laundry-800 underline">Wash & Fold</Link>
              <Link to="/services/wash-and-iron" className="text-laundry-600 hover:text-laundry-800 underline">Wash & Iron</Link>
              <Link to="/services/dry-cleaning" className="text-laundry-600 hover:text-laundry-800 underline">Dry Cleaning</Link>
              <Link to="/services/ironing" className="text-laundry-600 hover:text-laundry-800 underline">Ironing Service</Link>
              <Link to="/services/specialty" className="text-laundry-600 hover:text-laundry-800 underline">Specialty Cleaning</Link>
            </div>
          </div>
        </section>
        <BubbleAnimation />
        <HowItWorks />
        <WashingAnimations />
        <ServicesShowcase />
        <ClothesCarousel />
        <OfferCarousel />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
