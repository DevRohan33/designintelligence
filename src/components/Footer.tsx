
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="font-bold text-xl">
              DESIGN <span className="font-light">INTELLIGENCE</span>LLP
            </Link>
            <p className="mt-4 text-primary-foreground/80 max-w-md">
              We are bridging the gap between the traditional engineering space and tech using smart and custome-built software solution.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/services" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/solutions" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">Solutions</Link></li>
              <li><Link to="/work" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">Our Work</Link></li>
              <li><Link to="/about" className="hover:underline text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>designintelligence@gmail.com</li>
              <li>+91  8584823197</li>
              <li>Old Police Line Road,<br />Berhampore, West Bengal 742101</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} DesignIntelligence. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
