
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Three Viewer Lattice",
    summary: "Integrated solution for Tower project",
    description: "A 3D comprehensive tool that helps civil engineers plan and manage Tower Construction projects.",
    client: "Confidential State Agency (NDA Compliant)",
    year: "2023",
    image: "/images/three_view.jpg"
  },
  {
    title: "Gutter Tool",
    summary: "Real-time data filtering",
    description: "Filters essential data from large sources to ensure perfect planning and execution of street gutter.",
    client: "PY-Engineering",
    year: "2024",
    image: "/images/gutter.png"
  },
  {
    title: "Automatic BOM Generator",
    summary: "2D visualization and structural strength evaluation tool ",
    description: "A specialized tool designed for tower analysis, offering 2D visualization, structural strength validation, and seamless DXF export for engineering workflows.",
    client: "Confidential State Agency (NDA Compliant)",
    year: "2024 - Present",
    image: "/images/bom-automation2.jpg"
  },
  {
    title: "Staco OSM Frontend",
    summary: "Internal tool for precise stair tread data access",
    description: "An engineer-focused frontend system designed to streamline access to structured stair tread data, featuring admin controls for managing entries and internal operations.",
    client: "PY-Engineering",
    year: "2024-Present",
    image: "/images/staco.png"
  },
  {
    title: "Construction Document Automator",
    summary: "AI-powered documentation for construction projects",
    description: "Tool that uses artificial intelligence to generate, organize, and manage construction documentation, reducing errors and saving time.",
    client: "ABC Construction Group",
    year: "2022",
    image: "bg-[#f2f2f2]"
  },
  {
    title: "Structural Analysis App",
    summary: "Mobile tool for on-site structural assessments",
    description: "Mobile application that allows engineers to conduct structural assessments on-site and generate instant reports.",
    client: "Engineering Consultancy Firm",
  year: "2025",
    image: "bg-[#e6e6e6]"
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Explore our portfolio of successful civil engineering technology projects that have
              helped our clients overcome challenges and improve their operations.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow"
                >
                  <div 
                    className="aspect-video bg-center flex items-center justify-center bg-white">
                    {project.image.startsWith("bg") ? (
                      <div className={`${project.image} w-full h-full`}></div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-contain h-full w-full"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.summary}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-semibold">Client:</span> {project.client}
                      </div>
                      <div>
                        <span className="font-semibold">Year:</span> {project.year}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-end">
                      <button className="text-sm font-medium flex items-center group-hover:underline">
                        View details 
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="mb-8 text-lg">
                Contact us today to discuss how we can help you with your specific engineering technology needs.
              </p>
              <button className="px-6 py-3 btn-primary rounded-md">
                Contact Us Now
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkPage;
