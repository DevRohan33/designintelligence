import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const apps = [
  {
    id: 1,
    title: "Beam Calculation App",
    description: "A powerful tool to calculate bending moments, shear forces, and support reactions.",
    image: "/images/three_view.jpg",
    link: "https://67abb863b13c84da53b8e5bb--snazzy-taiyaki-917e9d.netlify.app/",
  },
  {
    id: 2,
    title: "Load Distribution App",
    description: "Distribute point loads and uniform loads on different structural elements.",
    image: "/images/Web-application.png",
    link: "https://67abb863b13c84da53b8e5bb--snazzy-taiyaki-917e9d.netlify.app/", 
  },
  {
    id: 3,
    title: "Concrete Mix Design Tool",
    description: "Design M20–M60 concrete mixes as per IS standards with auto calculation.",
    image: "/images/web-application2.png",
    link: "https://67abb863b13c84da53b8e5bb--snazzy-taiyaki-917e9d.netlify.app/", 
  },
  {
    id: 4,
    title: "Steel Weight Calculator",
    description: "Instantly compute the weight of steel sections from dimensions and types.",
    image: "/images/Web-application3.png",
    link: "https://67abb863b13c84da53b8e5bb--snazzy-taiyaki-917e9d.netlify.app/", 
  },
];

const DIAppPage = () => {
  const [activeApp, setActiveApp] = useState<number | null>(null);

  const toggleApp = (id: number) => {
    setActiveApp(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="bg-secondary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold">DL App Showcase</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our powerful engineering tools tailored for field professionals and students.
            </p>
          </div>
        </section>

        <section className="bg-background py-16">
          <div className="container-custom grid gap-8 md:grid-cols-2">
            {apps.map((app) => (
              <div
                key={app.id}
                onClick={() => toggleApp(app.id)}
                className={`cursor-pointer border border-border p-6 rounded-2xl transition-all duration-300 
                ${activeApp === app.id ? "bg-white shadow-xl scale-[1.02] border-primary" : "bg-muted hover:scale-[1.01]"}`}
              >
                <h2 className="text-xl font-semibold mb-2">{app.title}</h2>

                {activeApp === app.id && (
                  <div className="mt-4 space-y-4">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <p className="text-muted-foreground">{app.description}</p>
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition"
                    >
                      Use This App →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DIAppPage;
