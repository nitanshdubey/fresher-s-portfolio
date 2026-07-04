import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    name: "TaskFlow",
    description:
      "A minimalist task management app with drag-and-drop boards, real-time sync, and keyboard-first navigation.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    image:
      "https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/balazs-ketyi-LPWl2pEVGKc-unsplash.jpg?raw=true",
  },
  {
    name: "WeatherLens",
    description:
      "A weather dashboard that visualizes forecasts through clean data cards instead of cluttered widgets.",
    stack: ["React", "REST API", "Framer Motion"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    image:
      "https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/craig-whitehead-SuJp8ZpkubI-unsplash.jpg?raw=true",
  },
  {
    name: "DevNotes",
    description:
      "A distraction-free markdown editor for developers, with live preview and local-first storage.",
    stack: ["TypeScript", "React", "Git"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
    image:
      "https://github.com/nitanshdubey/fresher-s-portfolio/blob/main/samantha-borges-2N27SOmwiWg-unsplash.jpg?raw=true",
  },
];

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-t-2xl overflow-hidden border-b border-[var(--color-border)]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-padding page-width">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <span className="text-sm font-medium text-[var(--color-accent-indigo)]">
          Featured Projects
        </span>

        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight">
          A few things I've built.
        </h2>

        <p className="mt-4 text-secondary">
          Each project taught me something different — about code, about users,
          or about myself as a developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hover-lift group rounded-2xl border-subtle bg-[var(--color-bg-elevated)] overflow-hidden shadow-soft flex flex-col"
          >
            <div className="overflow-hidden">
              <ProjectImage
                src={project.image}
                alt={project.name}
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {project.name}
              </h3>

              <p className="mt-2 text-sm text-secondary flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-border)] text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-scale inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-subtle text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-border)]/50 transition-colors"
                >
                  <Github size={15} />
                  Code
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-scale inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--color-accent-indigo)] text-white text-sm font-medium"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;