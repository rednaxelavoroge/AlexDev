import { useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Terminal, Menu, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  isNda?: boolean;
  metrics?: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefillProject, setPrefillProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRequestAccess = (projectName: string) => {
    setPrefillProject(projectName);
    setSelectedProject(null);
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden">
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <Terminal size={18} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight font-display">
              AlexDev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection('workflow')} className="hover:text-white transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Контакты</button>
          </nav>

          {/* Nav CTA */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/995585890730"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-all"
            >
              Связаться в WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/5 bg-[#030712] px-4 py-6 space-y-4 flex flex-col">
            <button onClick={() => scrollToSection('services')} className="text-left text-gray-400 hover:text-white py-2 border-b border-white/5">Услуги</button>
            <button onClick={() => scrollToSection('projects')} className="text-left text-gray-400 hover:text-white py-2 border-b border-white/5">Кейсы</button>
            <button onClick={() => scrollToSection('workflow')} className="text-left text-gray-400 hover:text-white py-2 border-b border-white/5">Процесс</button>
            <button onClick={() => scrollToSection('contact')} className="text-left text-gray-400 hover:text-white py-2 border-b border-white/5">Контакты</button>
            <a 
              href="https://wa.me/995585890730"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 mt-4 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm block"
            >
              Связаться в WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <Hero 
        onCtaclick={() => scrollToSection('contact')} 
        onProjectsClick={() => scrollToSection('projects')} 
      />

      {/* Services Section */}
      <Services />

      {/* Projects Grid Section */}
      <Projects onSelectProject={(p) => setSelectedProject(p)} />

      {/* Workflow Process Section */}
      <Workflow />

      {/* Contact Section */}
      <Contact 
        prefillProjectName={prefillProject} 
        clearPrefill={() => setPrefillProject(null)} 
      />

      {/* Footer */}
      <Footer />

      {/* Case Study Modal with sandbox login */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onRequestAccess={handleRequestAccess}
      />

    </div>
  );
}

export default App;
