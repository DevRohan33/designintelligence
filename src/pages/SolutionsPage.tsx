
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Solutions from '@/components/Solutions';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Our Solutions</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              We identify common challenges in civil engineering and develop targeted technology 
              solutions that streamline processes and improve outcomes.
            </p>
          </div>
        </section>

        <Solutions />
        
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg mb-12">
                We follow a methodical process to understand your challenges and create effective solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Problem Analysis</h3>
                <p className="text-muted-foreground">We start by thoroughly understanding the engineering challenge.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Solution Design</h3>
                <p className="text-muted-foreground">Our engineers and developers collaborate to design the optimal solution.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground">We build and integrate the solution with your existing systems.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-border">
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-bold mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground">We monitor, refine, and enhance the solution based on real-world usage.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPage;
