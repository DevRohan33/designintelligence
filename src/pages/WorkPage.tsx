
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Highway Construction Planner",
    summary: "Integrated solution for highway project management",
    description: "A comprehensive tool that helps civil engineers plan and manage highway construction projects from initial survey to completion.",
    client: "State Transportation Department",
    year: "2023",
    image: "bg-[#f2f2f2]"
  },
  {
    title: "Bridge Maintenance System",
    summary: "Real-time monitoring and maintenance scheduling",
    description: "IoT-integrated software for monitoring structural health of bridges and automatically scheduling maintenance based on collected data.",
    client: "Regional Infrastructure Authority",
    year: "2022",
    image: "bg-[#e6e6e6]"
  },
  {
    title: "Urban Planning Tool",
    summary: "3D visualization and analysis for urban development",
    description: "Advanced simulation tool for urban planners that provides 3D visualization and impact analysis of new developments.",
    client: "Metropolitan Planning Office",
    year: "2023",
    image: "bg-[#d9d9d9]"
  },
  {
    title: "Water Resource Manager",
    summary: "Comprehensive water system modeling and management",
    description: "Software for monitoring, analyzing, and managing water resources including reservoirs, pipelines, and treatment facilities.",
    client: "Municipal Water Department",
    year: "2021",
    image: "bg-[#cccccc]"
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
    year: "2023",
    image: "bg-[#e6e6e6]"
  },
  {
    title: "Soil Testing Database",
    summary: "Centralized system for soil testing data",
    description: "Database application for storing, analyzing, and visualizing soil testing data across multiple project sites.",
    client: "Geotechnical Engineering Company",
    year: "2021",
    image: "bg-[#d9d9d9]"
  },
  {
    title: "Project Timeline Visualizer",
    summary: "Visual tool for project scheduling and tracking",
    description: "Interactive Gantt chart and timeline tool specifically designed for civil engineering project management.",
    client: "Multiple Clients",
    year: "2022",
    image: "bg-[#cccccc]"
  },
  {
    title: "Safety Compliance System",
    summary: "Digital solution for safety regulation compliance",
    description: "Automated system for tracking safety compliance on construction sites, including checklists, incident reporting, and analytics.",
    client: "Construction Safety Association",
    year: "2023",
    image: "bg-[#f2f2f2]"
  }
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
                  <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                    <div className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded-md"></div>
                    </div>
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
