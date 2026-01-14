export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  image: string;
  stars?: number;
}
