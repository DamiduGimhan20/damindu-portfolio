import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PERSONAL_INFO, STATS } from '@/constants/portfolio';
import { Code, Briefcase, Award, Users } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const statIcons = [Code, Briefcase, Award, Users];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image & Bio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
                  <img
                    src={profileImage}
                    alt="Damindu Gimhan"
                    className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold">
                Passionate Developer, Problem Solver
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              {/* Languages */}
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {STATS.map((stat, index) => {
                const Icon = statIcons[index];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="glass p-6 rounded-lg text-center hover:scale-105 transition-transform"
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
