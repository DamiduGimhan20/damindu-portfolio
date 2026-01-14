import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl overflow-hidden h-full flex flex-col ${
        featured ? 'lg:flex-row lg:items-center' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-muted ${
          featured ? 'lg:w-1/2 h-64 lg:h-96' : 'h-48'
        }`}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col flex-1 ${featured ? 'lg:w-1/2' : ''}`}>
        {featured && (
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full w-fit mb-3">
            Featured Project
          </span>
        )}

        <h3
          className={`font-bold mb-3 ${
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {project.stars !== undefined && project.stars > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg">
              <Star className="h-3.5 w-3.5 fill-primary" />
              <span className="text-sm font-semibold">{project.stars}</span>
            </div>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">Code</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
