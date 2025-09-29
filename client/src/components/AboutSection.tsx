import SocialLinks from './SocialLinks';
import { useScrollAnimationById } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const isVisible = useScrollAnimationById('about-title');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="about-title"
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack web developer with expertise in modern web technologies. 
              I specialize in building scalable web applications using React, Node.js, Python, and Django.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm focused on creating exceptional digital experiences that combine 
              beautiful design with robust engineering. I enjoy working on projects that challenge 
              me to learn new technologies and solve complex problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new frameworks, contributing to 
              open source projects, or sharing my knowledge through technical writing and mentoring.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h3>
              <SocialLinks />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 hover-elevate">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                What I Do
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Full-stack web application development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  API design and integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Responsive web design
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Performance optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Technical consulting
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover-elevate">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Current Focus
              </h3>
              <p className="text-muted-foreground">
                Building modern web applications with React, TypeScript, and Node.js. 
                Always learning and staying up-to-date with the latest technologies 
                and best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}