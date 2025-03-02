import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Welcome to Victory Travel and Tours
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to curating exceptional travel experiences that transcend the ordinary.
            Let us help you discover the world in comfort and style.
          </p>
        </div>
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App