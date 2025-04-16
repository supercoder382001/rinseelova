import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { WashingMachine, Phone, MapPin, Star, Award, ThumbsUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/home/CTA';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import SEO from '@/components/SEO';

const DelhiServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const delhiLocations = [
    "Connaught Place", "Saket", "Rohini", "Dwarka", "Lajpat Nagar", 
    "Karol Bagh", "Rajouri Garden", "Vasant Kunj", "Pitampura", "Greater Kailash",
    "Janakpuri", "Mayur Vihar", "Nehru Place", "Hauz Khas", "Malviya Nagar",
    "Punjabi Bagh", "Defence Colony", "Paschim Vihar", "Chanakyapuri", "Vasant Vihar"
  ];

  const services = [
    {
      name: "Premium Wash & Fold",
      description: "Professional washing and folding of your everyday clothes, with premium detergents and fabric softeners.",
      price: "₹80/kg",
      turnaround: "24-48 hours"
    },
    {
      name: "Wash & Iron",
      description: "Complete laundry service including steam ironing for a crisp, professional finish on all your garments.",
      price: "₹100/kg",
      turnaround: "24-48 hours"
    },
    {
      name: "Dry Cleaning",
      description: "Expert dry cleaning for your delicate and premium garments, suits, formals, and special occasion wear.",
      price: "From ₹250/piece",
      turnaround: "48-72 hours"
    },
    {
      name: "Express Service",
      description: "Expedited service for urgent laundry needs with same-day or next morning delivery.",
      price: "50% surcharge",
      turnaround: "6-12 hours"
    },
    {
      name: "Stain Removal",
      description: "Specialized treatment for stubborn stains using professional-grade products and techniques.",
      price: "From ₹150/item",
      turnaround: "48-72 hours"
    }
  ];

  const faqItems = [
    {
      question: "What areas in Delhi do you service?",
      answer: "We provide pickup and delivery services throughout Delhi NCR, including all major neighborhoods and localities. Our service extends to Gurgaon, Noida, Faridabad, and Ghaziabad."
    },
    {
      question: "How does your pickup and delivery service work?",
      answer: "Simply schedule a pickup through our app or website. Our representative will collect your items at your chosen time slot. Once processed, we'll deliver them back to you at your preferred time."
    },
    {
      question: "What sets your laundry service apart in Delhi?",
      answer: "We combine premium quality with convenience and reliability. Our eco-friendly procedures, professional-grade equipment, and trained staff ensure exceptional results for all your garments."
    },
    {
      question: "Do you offer subscription plans for regular customers?",
      answer: "Yes, we offer weekly, bi-weekly, and monthly subscription packages with significant savings and priority scheduling for regular customers."
    },
    {
      question: "How do you handle delicate or special garments?",
      answer: "Our specialists identify and separately process delicate items using appropriate cleaning methods, specialized detergents, and gentle handling throughout the process."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Premium Laundry & Dry Cleaning Services in Delhi | Rinsee"
        description="Professional laundry and dry cleaning services in Delhi NCR. Enjoy doorstep pickup & delivery, premium cleaning, and exceptional customer service. Book now!"
        keywords="laundry service Delhi, dry cleaning Delhi, wash and fold Delhi, premium laundry Delhi NCR, doorstep laundry pickup"
        canonicalUrl="https://rinsee.in/delhi-services"
      />
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-laundry-50 to-laundry-100">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Premium Laundry & Dry Cleaning Services in Delhi</h1>
                <p className="text-lg md:text-xl text-gray-700">
                  Experience the finest laundry and dry cleaning services in Delhi with doorstep pickup and delivery.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
                <Button asChild size="lg" className="bg-laundry-600 hover:bg-laundry-700">
                  <Link to="/contact-us">Schedule Pickup</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-laundry-600 text-laundry-600">
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Premium Laundry & Dry Cleaning Services in Delhi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive garment care solutions for all your needs
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex flex-col gap-2 mt-auto">
                        <div className="flex justify-between">
                          <span className="font-medium">Price:</span>
                          <span className="text-laundry-600 font-bold">{service.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Turnaround:</span>
                          <span>{service.turnaround}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Rinsee in Delhi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Delhi's most trusted laundry and dry cleaning service
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={100} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-laundry-100 text-laundry-600 p-4 rounded-full mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Doorstep Service</h3>
                  <p className="text-gray-600">
                    Free pickup and delivery across Delhi NCR, saving you time and hassle.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-laundry-100 text-laundry-600 p-4 rounded-full mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                  <p className="text-gray-600">
                    State-of-the-art equipment and premium detergents for exceptional results.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-laundry-100 text-laundry-600 p-4 rounded-full mb-4">
                    <ThumbsUp size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">
                    4.8/5 rating from over 10,000 satisfied customers across Delhi.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Areas We Serve in Delhi</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive coverage across Delhi NCR
              </p>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {delhiLocations.map((location, index) => (
                  <div key={index} className="bg-laundry-50 p-3 rounded-lg text-center">
                    <span className="font-medium">{location}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Don't see your area? We likely still service it! Contact us to confirm.
                </p>
                <Button asChild variant="outline" className="border-laundry-600 text-laundry-600">
                  <Link to="/contact-us">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our laundry services in Delhi
              </p>
            </AnimatedSection>
            
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 100} className="mb-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Delhi Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from our satisfied customers across Delhi
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "After trying multiple laundry services in Delhi, I've finally found the best one. Rinsee consistently delivers exceptional quality and their pickup service is always on time."
                </p>
                <div className="font-semibold">Priya S., Vasant Kunj</div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "As a busy professional in South Delhi, Rinsee has been a lifesaver. Their subscription plan gives me one less thing to worry about. Highly recommended!"
                </p>
                <div className="font-semibold">Rahul M., Greater Kailash</div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-4 italic">
                  "They managed to remove a stain from my favorite dress that two other dry cleaners couldn't. Their attention to detail and quality of service is outstanding."
                </p>
                <div className="font-semibold">Anjali T., Connaught Place</div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default DelhiServicesPage;