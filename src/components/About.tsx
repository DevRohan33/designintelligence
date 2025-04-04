
const teamMembers = [
  {
    name: "Jane Smith",
    position: "Founder & CEO",
    image: "bg-[#e6e6e6]"
  },
  {
    name: "John Doe",
    position: "Technical Director",
    image: "bg-[#d9d9d9]"
  },
  {
    name: "Sarah Johnson",
    position: "Civil Engineer",
    image: "bg-[#cccccc]"
  },
  {
    name: "Michael Chen",
    position: "Software Development Lead",
    image: "bg-[#f2f2f2]"
  }
];

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
            <div className="space-y-4 text-lg">
              <p>
                TechBridge was founded in 2018 with a mission to bridge the gap between 
                civil engineering challenges and modern technology solutions. 
              </p>
              <p>
                Our team combines expertise in both civil engineering and software development,
                allowing us to understand the unique challenges faced by engineering firms and 
                create intuitive solutions that address real-world problems.
              </p>
              <p>
                With a focus on simplicity, efficiency, and reliability, we've helped dozens
                of engineering firms transform their workflows and achieve better results.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-secondary rounded-tl-3xl"></div>
            <div className="aspect-square bg-secondary rounded-tr-3xl mt-8"></div>
            <div className="aspect-square bg-secondary rounded-bl-3xl -mt-8"></div>
            <div className="aspect-square bg-secondary rounded-br-3xl"></div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-lg overflow-hidden">
                <div className={`aspect-square ${member.image}`}></div>
                <div className="p-4">
                  <h4 className="font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To empower civil engineers with intuitive technology solutions that simplify 
              complex processes, enhance productivity, and improve project outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To become the leading technology partner for civil engineering firms worldwide,
              driving innovation and efficiency in the industry through thoughtful software design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
