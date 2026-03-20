import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, ExternalLink, Code2, Palette, Terminal, User, Award } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Infrastructure Automation",
    description: "Designed and deployed scalable infrastructure across AWS, GCP, and Azure using Terraform and CI/CD pipelines.",
    tags: ["Terraform", "AWS", "GCP", "Azure"],
    link: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Generative AI Solutions",
    description: "As a Google Cloud Innovator Champion, I develop and test pre-release AI innovations to shape inclusive user experiences.",
    tags: ["Generative AI", "Google Cloud", "Vertex AI"],
    link: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cloud Security Framework",
    description: "Implemented robust security protocols including IAM, VPC service controls, and multi-cloud integration for enterprise clients.",
    tags: ["Cloud Security", "IAM", "VPC", "Compliance"],
    link: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

const skills = [
  { name: "Cloud Platforms", icon: <Terminal className="w-5 h-5" />, items: ["Google Cloud", "AWS", "Microsoft Azure", "IaaS/PaaS"] },
  { name: "AI/ML & DevOps", icon: <Code2 className="w-5 h-5" />, items: ["Generative AI", "MLOps", "CI/CD", "Infrastructure as Code"] },
  { name: "Security & Networking", icon: <User className="w-5 h-5" />, items: ["VPC", "IAM", "Cloud Security", "Multi-cloud Integration"] }
];

const certifications = [
  "AWS Solution Architect Professional",
  "Google Professional Cloud Architect",
  "Microsoft Certified Trainer",
  "Azure Administrator Associate",
  "CompTIA Cloud+ & Network+"
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            ROBINA.CLOUD
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-emerald-500 text-zinc-950 rounded-full text-sm font-bold"
          >
            Contact Me
          </motion.button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                  Google Developer Expert (AI/ML)
                </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                  AWS Community Builder
                </span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-bold rounded-full border border-orange-500/20">
                  Google Publication Writer
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif italic mb-6 leading-tight">
                Architecting the <br />
                <span className="text-gradient not-italic font-sans font-bold">Cloud Future.</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                With over 7 years of experience in Cloud Architecture, AI/ML, and DevOps, 
                I specialize in designing and optimizing solutions across Google Cloud, AWS, and Azure.
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
                  View Portfolio
                </a>
                <div className="flex items-center gap-4 px-6">
                  <a href="https://github.com/RobinaMirbahar" target="_blank" rel="noreferrer"><Github className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" /></a>
                  <a href="https://linkedin.com/in/robinamirbahar" target="_blank" rel="noreferrer"><Linkedin className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" /></a>
                  <a href="https://www.credly.com/users/robinamirbahar" target="_blank" rel="noreferrer"><Award className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" /></a>
                  <a href="mailto:mallah.robina@gmail.com"><Mail className="w-6 h-6 text-zinc-400 hover:text-white cursor-pointer" /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-zinc-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-emerald-500 font-bold mb-2">Expertise</h2>
                <h3 className="text-4xl font-bold">Cloud & AI Solutions</h3>
              </div>
              <p className="text-zinc-400 hidden md:block">Multi-cloud architecture specialist</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative glass rounded-3xl overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <ExternalLink className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400" />
                    </div>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-800 rounded-md text-zinc-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Skills */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm uppercase tracking-widest text-emerald-500 font-bold mb-4">Professional Summary</h2>
              <h3 className="text-4xl font-bold mb-6">Empowering communities through cloud innovation.</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                As a Google Developer Expert (GDE) in AI/ML and Women Techmakers Ambassador, I am passionate about 
                mentoring aspiring technologists and testing pre-release cloud innovations. I also lead the 
                <strong> Women Techmakers Hyderabad Pakistan</strong> community, driving local impact and inclusion.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">7+ Years</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Cloud Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-400 mb-1">10+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Certifications</div>
                </div>
              </div>
              
              <div className="p-6 glass rounded-2xl border-emerald-500/20">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-emerald-400">Top Certifications</h4>
                  <a 
                    href="https://www.credly.com/users/robinamirbahar" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs flex items-center gap-1 text-zinc-500 hover:text-white transition-colors"
                  >
                    Verify on Credly <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {certifications.map(cert => (
                    <span key={cert} className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <div id="skills" className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      {skillGroup.icon}
                    </div>
                    <h4 className="font-bold">{skillGroup.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-zinc-800/50 rounded-full text-sm text-zinc-300 border border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-emerald-500">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-zinc-950 text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Let's build intelligent <br /> cloud solutions.
              </h2>
              <p className="text-zinc-900/70 text-xl mb-10 max-w-xl mx-auto">
                Based in Pakistan, working globally. Available for consultation, 
                training, and cloud architecture design.
              </p>
              <a 
                href="mailto:mallah.robina@gmail.com"
                className="inline-block px-10 py-5 bg-zinc-950 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-zinc-500">
            © 2024 Robina Mirbahar. Cloud Architect & GDE.
          </div>
          <div className="flex gap-4">
            <a 
              href="https://twitter.com/RobinaMirbahar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/robinamirbahar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.credly.com/users/robinamirbahar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Credly"
            >
              <Award className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/RobinaMirbahar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 glass rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
