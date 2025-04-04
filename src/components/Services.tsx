
import { Building, Code, Database, FileText, Layers, Settings } from 'lucide-react';

const services = [
  {
    icon: <Building size={32} />,
    title: "Construction Planning Tools",
    description: "Digital solutions for efficient construction planning and management."
  },
  {
    icon: <Database size={32} />,
    title: "Data Management Systems",
    description: "Organize and analyze engineering data with custom database solutions."
  },
  {
    icon: <Layers size={32} />,
    title: "GIS Integrations",
    description: "Geographic Information Systems customized for civil engineering needs."
  },
  {
    icon: <Code size={32} />,
    title: "Custom Software Development",
    description: "Tailor-made software applications for specific engineering challenges."
  },
  {
    icon: <FileText size={32} />,
    title: "Documentation Automation",
    description: "Streamline report generation and documentation processes."
  },
  {
    icon: <Settings size={32} />,
    title: "Process Optimization",
    description: "Analyze and improve workflows with technology-driven solutions."
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary" id="services">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-muted-foreground">
            We provide specialized IT solutions to solve complex civil engineering problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg border border-border hover:shadow-md transition-shadow"
            >
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
