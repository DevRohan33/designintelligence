
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            TECH<span className="font-light">BRIDGE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium line-animation">Home</Link>
            <Link to="/services" className="text-sm font-medium line-animation">Services</Link>
            <Link to="/solutions" className="text-sm font-medium line-animation">Solutions</Link>
            <Link to="/work" className="text-sm font-medium line-animation">Our Work</Link>
            <Link to="/about" className="text-sm font-medium line-animation">About Us</Link>
            <Link to="/contact" className="ml-4 px-4 py-2 btn-primary rounded-md text-sm font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 space-y-4 flex flex-col">
            <Link to="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/solutions" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/work" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Our Work</Link>
            <Link to="/about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="px-4 py-2 btn-primary rounded-md text-sm font-medium w-full text-center" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
