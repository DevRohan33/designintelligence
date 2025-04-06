
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Clock, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">

        <Contact />
        
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Visit Our Office</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <MapPin className="mr-3" />
                  <div>
                    <h3 className="font-semibold text-lg">Main Office</h3>
                    <p className="text-muted-foreground">
                      Old Police Line Road<br />
                      Berhampore - 742101<br />
                      West Bengal , India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3" />
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.5067161780553!2d88.245145!3d24.083669699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97e80350ffcc9%3A0xa020bd5641cf1ca4!2sOld%20Police%20Line%20Rd%2C%20Gora%20Bazar%2C%20West%20Bengal%20742101!5e0!3m2!1sen!2sin!4v1743877195222!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
