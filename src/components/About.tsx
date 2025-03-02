import React from 'react';
import { Heart, Shield, Lightbulb, Eye } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Vision",
    description: "Our vision is rooted in three core principles: Integrity, Simplicity, and Transparency. At Victory Travel and Tours, we put our clients first, striving to exceed their expectations and ensure their ultimate satisfaction with every journey they take with us. "
  },
  {
    icon: Shield,
    title: "Mission",
    description: "Our main aim is to make our client's travel dream a reality, leaving long lasting hassle free memories."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We conduct our business with the highest ethical standards, ensuring transparency in all our dealings."
  },

  {
    icon: Lightbulb,
    title: "Transparency",
    description: "Clear communication and honest pricing are the cornerstones of our service delivery."
  }
];

export default function About() {
  return (
    <section className="py-16" id='about'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            "Travel with Confidence, Arrive with Ease"
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Travel with Confidence, Arrive with Ease." At Victory Travel &Tours, we are dedicated to ensuring your journey is seamless and stress-free. Driven by our core values of Integrity, Simplicity, and Transparency, we coordinate every detail of your travel and accommodation needs. Entrust your journey to us and experience exceptional travel care. Our dedicated team will escort you every step of the way, providing personalized service and attention to detail          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?auto=format&fit=crop&q=80"
              alt="Sheraton Maldives Full Moon Resort & Spa"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?auto=format&fit=crop&q=80"
              alt="Mount Everest"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <value.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}