import SkillBar from './SkillBar';
import { useScrollAnimationById } from '@/hooks/useScrollAnimation';

const skillsData = [
  // Frontend Skills
  { category: 'Frontend Development', skills: [
    { name: 'React', percentage: 85 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'HTML5', percentage: 92 },
    { name: 'CSS3', percentage: 90 },
    { name: 'Responsive Design', percentage: 87 },
  ]},
  // Backend Skills
  { category: 'Backend Development', skills: [
    { name: 'Node.js', percentage: 90 },
    { name: 'Python', percentage: 82 },
    { name: 'Django', percentage: 80 },
    { name: 'Flask', percentage: 78 },
    { name: 'API Development', percentage: 85 },
    { name: 'API Integration', percentage: 83 },
  ]},
  // Other Skills
  { category: 'Development Tools', skills: [
    { name: 'Web Application', percentage: 86 },
    { name: 'Full Stack Development', percentage: 84 },
  ]}
];

export default function SkillsSection() {
  const isVisible = useScrollAnimationById('skills-title');

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="skills-title"
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-1000 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'
            }`}
          >
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and frameworks I work with to build modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={categoryIndex * 200 + skillIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}