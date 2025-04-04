
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // In a real app, you would send this data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section-padding bg-secondary" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            Reach out to discuss how we can help with your engineering technology needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 btn-primary rounded-md font-medium w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                We're here to help with any questions about our services or how we can assist with your project.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-4 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="mt-1">contact@techbridge.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-4 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-muted-foreground" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p className="mt-1">1234 Innovation Drive, Tech City, CA 98765</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Office Hours</h3>
              <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
