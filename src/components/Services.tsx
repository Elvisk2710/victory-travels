import React from 'react';
import { Plane, Users, Building, Palmtree, FileText, Ship, Car } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Corporate Booking",
    description: "At Victory Travel and Tours, we offer a wide range of options tailored to your business. We pride ourselves in offering tailor-made Corporate Travel solutions that will ensure that your travel needs are met. \n \n We’ll take the load off you by providing specialist service through our dedicated travel consultant who is available 24/7. With extensive experience serving corporations worldwide, we at Victory Travel and Tours possess in-depth knowledge of the evolving travel industry. We prioritize personalized support, offering expert advice throughout the booking process and ensuring a smooth and efficient experience from initial inquiry to quotation, agreement, and finally, travel."
  },
  {
    icon: Users,
    title: "Group Booking",
    description: "At Victory Travel & Tours, we specialize in organizing seamless and unforgettable group experiences for social, corporate, and educational purposes. We craft journeys that spark wonder, ignite excitement, and leave you breathless. Whether you're traveling with friends, family, or like-minded individuals, our expertly curated experiences promise to awaken your sense of adventure and leave you yearning for more. \n \n Our team ensures that all logistical aspects are taken care of, allowing you to focus on enjoying the experience. Trust us to make your group’s travel dreams a reality with expert service and attention to detail at every step."
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "At Victory Travel & Tours, we go beyond just booking your travel— we ensure that your accommodation meets your highest standards. With access to a wide range of properties worldwide, we secure the perfect lodging to suit your preferences and budget. Whether you’re looking for luxury, comfort, or convenience, we handle all the details, leaving you free to focus on enjoying your journey. Travel with us and experience the ease of having your accommodation expertly managed, every step of the way."
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    description: "At Victory Travel, we believe that holidays should be more than just a vacation – they should be an unforgettable adventure. That's why we curate a diverse range of exciting holiday packages, from thrilling cruises to captivating land tours, designed to inspire and delight. Whether you're dreaming of exploring ancient ruins, relaxing on pristine beaches, or immersing yourself in vibrant cultures, our expertly crafted packages will take you there. Let Victory Travel be your guide to extraordinary journeys."
  },
  {
    icon: FileText,
    title: "Visa Applications",
    description: "At Victory Travel & Tours, we simplify travel documentation, giving you more time to focus on your journey. Our expert team specializes in securing visas for a select number of countries, but we're also happy to guide you through the requirements for other destinations. Let us handle the paperwork and intricacies, ensuring you're fully prepared and compliant with all necessary regulations. Travel with confidence, knowing we've got the details covered."
  },
  {
    icon: Ship,
    title: "Cruise Booking",
    description: "Dreaming of a luxurious cruise vacation? At Victory Travel and Tours, we specialize in crafting unforgettable cruise experiences. From exploring the vibrant Caribbean to sailing the majestic Mediterranean, we offer a wide selection of itineraries and cruise lines to suit every budget and preference. Our expert team will guide you through every step of the booking process, ensuring you find the perfect cruise to match your travel dreams. Let us handle the details, so you can relax and anticipate a truly remarkable voyage."
  },
  {
    icon: Car,
    title: "Car Rental",
    description: "Explore beyond with the freedom and flexibility of a rental car from Victory Travel and Tours. We offer a wide range of vehicles to suit your needs, from compact cars for city driving to spacious SUVs for adventurous road trips. Our competitive rates and excellent customer service ensure a smooth and enjoyable travel experience. Book your rental car with us today and embark on your next unforgettable journey."
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