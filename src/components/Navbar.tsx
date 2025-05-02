
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-border">
      <div className="px-6 max-w-screen-xl mx-auto w-full">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/design_intelligence_llp_logo.jpg"
              alt="Company Logo"
              className="h-8 w-auto"
            />
          <div className="leading-none text-left">
            <div className="text-2xl font-bold text-ais-dark font-custom tracking-tight">
              DESIGN
            </div>
            <div className="text-2xl font-light text-ais-coral font-custom tracking-tight">
              INTELLIGENCE
            </div>
          </div>
              
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-lg font-medium line-animation">Home</Link>
            <Link to="/services" className="text-lg font-medium line-animation">Services</Link>
            <Link to="/solutions" className="text-lg font-medium line-animation">Solutions</Link>
            <Link to="/work" className="text-lg font-medium line-animation">Our Work</Link>
            <Link to="/diapp" className="text-lg font-medium line-animation">DI App</Link>
            <Link to="/blog" className="text-lg font-medium line-animation">Blog</Link>
            <Link to="/about" className="text-sm font-medium line-animation">About Us</Link>
            <Link to="/contact" className="ml-4 px-6 py-3 btn-primary rounded-md text-lg font-medium">
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
            <Link to="/diapp" className="text-sm font-medium" onClick={() => setIsOpen(false)}>DI App</Link>
            <Link to="/blog" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
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
