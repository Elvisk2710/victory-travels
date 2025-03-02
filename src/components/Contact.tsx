import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const consultants = [
  {
    name: "Nester Gadaga",
    role: "Travel Manager",
    phone: "+263 77 285 3085"
  },
  {
    name: "Lenah Madzinga",
    role: "Victory Travel Consultant",
    phone: "+263 77 251 6272"
  },
  {
    name: "Sithabile Sibanda",
    role: "Victory Travel Consultant",
    phone: "+263 77 240 8464"
  },
  {
    name: "Emily Williams",
    role: "Marketing, Sales & Finance Manager",
    phone: "+263 77 518 0007"
  },
  {
    name: "Tapiwa Huni",
    role: "Marketing",
    phone: "+263 71 561 3873"
  }
];

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50" id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Our Travel Experts</h3>
              <div className="space-y-6">
                {consultants.map((consultant, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold">{consultant.name}</h4>
                      <p className="text-gray-600">{consultant.role}</p>
                      <p className="text-blue-900">{consultant.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Office Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-900 mt-1" />
                  <p>279 Samora Machel, Harare, Zimbabwe</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-blue-900 mt-1" />
                  <p>info@victorytravels.com</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-blue-900 mt-1" />
                  <p>+1 234 567 8900</p>
                </div>
              </div>
            </div>

          {/* <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
}