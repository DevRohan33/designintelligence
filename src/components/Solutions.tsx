
const solutions = [
  {
    title: "Site Analysis Complexity",
    challenge: "Engineers struggle with time-consuming site analysis and data collection.",
    solution: "Our automated site analysis tool integrates with existing data sources for rapid, accurate assessments."
  },
  {
    title: "Documentation Overload",
    challenge: "Managing extensive project documentation and ensuring compliance is error-prone.",
    solution: "Document automation system that templates, generates, and organizes all required documentation."
  },
  {
    title: "Project Timeline Visibility",
    challenge: "Difficulty in tracking progress across multiple project phases and communicating updates.",
    solution: "Real-time project dashboard with timeline visualization and automated stakeholder updates."
  }
];

const Solutions = () => {
  return (
    <section className="section-padding" id="solutions">
      <div className="container-custom">
        <div className="space-y-12 mt-12">
          {solutions.map((item, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">The Challenge</h4>
                    <p>{item.challenge}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-muted-foreground mb-2">Our Solution</h4>
                    <p>{item.solution}</p>
                  </div>
                  
                  <div className="mt-6 md:mt-12 pt-6 border-t border-border">
                    <button className="text-sm font-medium hover:underline">
                      Request Demo →
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="h-12 bg-secondary w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
