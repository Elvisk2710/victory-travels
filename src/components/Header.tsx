import React, { useState } from 'react';
import { Menu, Phone, Mail, MapPin, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+263 77 285 3085</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@victorytravels.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span className="text-sm">279 Samora Machel, Harare, Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl md:text-2xl font-bold text-blue-900">Victory Travel & Tours</h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-900">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} style={{
          transition: '0.3s ease-in-out'
        }}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Services
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}