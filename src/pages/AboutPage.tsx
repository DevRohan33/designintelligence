
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
                    <h3 className="font-semibold">2018</h3>
                    <p className="text-muted-foreground">TechBridge founded by Jane Smith with a vision to solve civil engineering challenges through technology</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2019</h3>
                    <p className="text-muted-foreground">Launched our first product, Site Analysis Toolkit, with over 200 clients in the first year</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2020</h3>
                    <p className="text-muted-foreground">Expanded team to include specialized civil engineers alongside software developers</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2022</h3>
                    <p className="text-muted-foreground">Partnered with State Transportation Department on major infrastructure project</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">2023</h3>
                    <p className="text-muted-foreground">Opened second office location and expanded services internationally</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg border border-border">
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="space-y-4">
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
