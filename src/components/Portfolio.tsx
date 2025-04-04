
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Highway Construction Planner",
    summary: "Integrated solution for highway project management",
    image: "bg-[#f2f2f2]"
  },
  {
    title: "Bridge Maintenance System",
    summary: "Real-time monitoring and maintenance scheduling",
    image: "bg-[#e6e6e6]"
  },
  {
    title: "Urban Planning Tool",
    summary: "3D visualization and analysis for urban development",
    image: "bg-[#d9d9d9]"
  },
  {
    title: "Water Resource Manager",
    summary: "Comprehensive water system modeling and management",
    image: "bg-[#cccccc]"
  },
  {
    title: "Construction Document Automator",
    summary: "AI-powered documentation for construction projects",
    image: "bg-[#f2f2f2]"
  },
  {
    title: "Structural Analysis App",
    summary: "Mobile tool for on-site structural assessments",
    image: "bg-[#e6e6e6]"
  }
];

const Portfolio = () => {
  return (
    <section className="section-padding bg-secondary" id="portfolio">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work</h2>
          <p className="mt-4 text-muted-foreground">
            Explore our portfolio of successful civil engineering technology projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow">
              <div className={`aspect-video ${project.image} flex items-center justify-center`}>
                <div className="w-16 h-16 border-2 border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-md"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground">{project.summary}</p>
                <div className="mt-4 flex justify-end">
                  <button className="text-sm font-medium flex items-center group-hover:underline">
                    View details 
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/work" className="px-6 py-3 btn-primary rounded-md inline-block">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
