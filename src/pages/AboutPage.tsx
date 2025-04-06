
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Learn more about our team, our story, and our mission to transform civil engineering with technology.
            </p>
          </div>
        </section>

        <About />
        
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2023</h3>
                    <p className="text-muted-foreground">Started as a freelance initiative focused on solving civil engineering problems using technology, founded by Rupanzil Mamun Prince.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2024</h3>
                    <p className="text-muted-foreground">Officially launched as a full-fledged IT Services and Consulting company addressing multi-disciplinary engineering challenges.</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2025</h3>
                    <p className="text-muted-foreground">Successfully completed 4+ projects for international clients, marking a strong beginning in the global market.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-border">
                <h2 className="text-3xl font-bold mb-6">Why We're Different</h2>
                {/* <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">Innovation</h3>
                    <p className="text-muted-foreground">We constantly explore new technologies and approaches to solve engineering challenges.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Expertise</h3>
                    <p className="text-muted-foreground">Our team combines deep domain knowledge in both engineering and software development.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Quality</h3>
                    <p className="text-muted-foreground">We never compromise on the quality of our solutions, ensuring reliability and accuracy.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Partnership</h3>
                    <p className="text-muted-foreground">We work closely with our clients, building lasting relationships based on trust.</p>
                  </div>
                </div> */}
                <div className='space-y-4'>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Tech + Engineering synergy</li>
                    <li>Client-first, solution-focused approach</li>
                    <li>Multi-disciplinary team of experts</li>
                    <li>Rapid delivery with robust results</li><br></br>
                  </ul>
                </div>
                <div className='space-y-4'>
                  <h3 className="font-semibold text-xl mb-2">Fun Fact</h3>
                  <p className="text-muted-foreground">
                    Our first project was completed using just 2 laptops, coffee, and pure passion. Now, we serve clients across 5+ countries!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
