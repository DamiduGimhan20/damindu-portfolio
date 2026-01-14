import { Github, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {currentYear} {PERSONAL_INFO.displayName}.
              <Heart className="h-3 w-3 text-primary fill-primary inline mx-1" />
              
            </p>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
