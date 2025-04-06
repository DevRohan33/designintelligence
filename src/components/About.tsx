
const teamMembers = [
  {
    name: "Rupanzil Mamun Prince",
    position: "Founder & CEO",
    image: "./images/employee1.jpeg"
  },
  {
    name: "Arijit Sau",
    position: "Human Resource",
    image: "./images/employeew2.jpeg"
  },
  {
    name: "Jaaf Deo",
    position: "Software Developer ",
    image: "Software Developer"
  },
  {
    name: "Jack Mikel ",
    position: "Software Developer ",
    image: "./images/employeew3.jpeg"
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
                Design Intelligence LLP was founded in 2023 with a mission to bridge the gap between 
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
            <img
              src="./images/about_img1.jpg"
              alt="Image 1"
              className="aspect-square object-cover bg-secondary rounded-tl-3xl"
            />
            <img
              src="./images/about_img2.jpg"
              alt="Image 2"
              className="aspect-square object-cover bg-secondary rounded-tr-3xl mt-8"
            />
            <img
              src="./images/about_img3.jpg"
              alt="Image 3"
              className="aspect-square object-cover bg-secondary rounded-bl-3xl -mt-8"
            />
            <img
              src="./images/about_img4.jpg"
              alt="Image 4"
              className="aspect-square object-cover bg-secondary rounded-br-3xl"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-secondary rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto"/>
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
              To empower Engineers with intuitive technology solutions that simplify 
              complex processes, enhance productivity, and improve project outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              To become the leading technology partner for ngineering firms worldwide,
              driving innovation and efficiency in the industry through thoughtful software design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
