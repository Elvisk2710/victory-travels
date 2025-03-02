import React from 'react';
import { Plane, Users, Building, Palmtree, FileText, Ship, Car } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Corporate Booking",
    description: "Tailor-made corporate travel solutions with 24/7 consultant support"
  },
  {
    icon: Users,
    title: "Group Booking",
    description: "Organized group travel experiences for social, corporate, and educational purposes"
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "Global lodging arrangements based on client preferences"
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    description: "Exciting travel packages for adventure seekers"
  },
  {
    icon: FileText,
    title: "Visa Applications",
    description: "Assistance in securing travel visas and required documents"
  },
  {
    icon: Ship,
    title: "Cruise Booking",
    description: "Luxury cruise arrangements worldwide"
  },
  {
    icon: Car,
    title: "Car Rental",
    description: "Affordable and flexible vehicle rental options"
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50" id='services'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <service.icon className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}