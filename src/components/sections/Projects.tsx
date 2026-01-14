import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useQuery } from '@tanstack/react-query';
import { PROJECTS } from '@/constants/portfolio';
import ProjectCard from '@/components/features/ProjectCard';
import { fetchGitHubRepos, mapGitHubRepoToProject } from '@/lib/github';
import { Loader2 } from 'lucide-react';
import type { Project } from '@/types/project';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fetch real GitHub projects
  const { data: githubRepos, isLoading, error } = useQuery({
    queryKey: ['github-repos'],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });

  // Use GitHub data if available, otherwise fallback to static data
  const projects: Project[] = githubRepos && githubRepos.length > 0
    ? githubRepos.slice(0, 6).map((repo, index) => 
        mapGitHubRepoToProject(repo, index === 0)
      )
    : PROJECTS;

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading projects from GitHub...
                </span>
              ) : error ? (
                'Showcasing selected projects from my portfolio'
              ) : (
                `Live from GitHub - ${projects.length} recent projects`
              )}
            </p>
          </div>

          {/* Featured Project - Full Width */}
          {featuredProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <ProjectCard project={featuredProject} featured />
            </motion.div>
          )}

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
