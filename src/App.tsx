import React from 'react';
import { Github, Linkedin, Mail, Server, Database, Code2, Globe, Terminal } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  links?: {
    docs?: string;
    github?: string;
  };
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Full-Stack Developer</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Building robust web applications with Django, React, Express.js, and Flask
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Contact Me
              </a>
              <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Globe className="w-8 h-8 text-blue-600" />}
              title="Frontend"
              skills={['React', 'TypeScript', 'Tailwind CSS',]}
            />
            <SkillCard
              icon={<Server className="w-8 h-8 text-green-600" />}
              title="Backend"
              skills={['Python','JavaScript/TypeScript','Java','Django', 'Flask', 'Express.js', 'Node.js']}
            />
            <SkillCard
              icon={<Database className="w-8 h-8 text-purple-600" />}
              title="Databases"
              skills={['PostgreSQL', 'MongoDB', 'SQLite']}
            />
            <SkillCard
              icon={<Code2 className="w-8 h-8 text-orange-600" />}
              title="Tools"
              skills={['Git', 'Docker', 'Postman', 'Linux']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Property Hive Backend"
              description="During my internship at InternPulse, I led the backend team in building a digital platform for real estate companies. Implemented robust APIs for property listings, user authentication, and admin dashboard. Notable achievements include developing a secure payment system and automated document generation that improved transaction speed by 40%. Successfully managed team collaboration and code reviews while ensuring seamless integration with the frontend team."
              tech={['Django', 'Django REST Framework', 'PostgreSQL', 'JWT']}
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800"
              links={{
                docs: "https://documenter.getpostman.com/view/38661757/2sAXxMgDfr",
                github: "https://github.com/InternPulse/property-hive-backend"
              }}
            />
            <ProjectCard
              title="Revive fitness"
              description="Revive Fitness is a streamlined gym registration app that lets users sign up, manage memberships, and track progress, while giving gym admins tools to oversee members and payments effortlessly. Designed to simplify gym management and enhance the fitness experience."
              tech={['Django','Html','CSS','javascript','PostgreSQL','Cloudinary','Paystack Titan']}
              image="https://res.cloudinary.com/dtqdaogbn/image/upload/v1727025804/revive%20fitness/sfl5noczhq1zeqlibs9g.png"
              links={{
                docs: "https://github.com/abdulhamidbabawale/revivefitness",
                github: "revivefitness.onrender.com/"
              }}
            />
            <ProjectCard
              title="HCI Healthcare HMO CRM"
              description="Developing a CRM system for a health insurance company, focusing on performance tracking, policy management, and claims processing. Responsible for both frontend and backend development, including API design, database management, UI/UX implementation, and system optimization to ensure a seamless user experience."
              tech={['Express.js','Typescript', 'React', 'PostgreSQL']}
              image="https://media.licdn.com/dms/image/v2/C560BAQGEkn7lWnN0wA/company-logo_200_200/company-logo_200_200/0/1630596927567/healthcare_international_ltd_logo?e=1748476800&v=beta&t=4lvyXDfQtrpfL2Rq__qb_YG2THAI1OcEC6RLN2ADlfw"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a
                href="mailto:hamidbabawale@gmail.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition"
              >
                <Mail className="w-6 h-6" />
                <span>hamidbabawale@gmail.com</span>
              </a>
              <a
                href="https://github.com/abdulhamidbabawale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulhamid-babawale-67056a2b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Abdulhamid Babawale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <Terminal className="w-4 h-4 mr-2 text-gray-400" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech, image, links }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        {links && (
          <div className="flex gap-3">
            {links.docs && (
              <a
                href={links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                API Docs
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
