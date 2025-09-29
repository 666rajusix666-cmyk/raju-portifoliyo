import { Button } from '@/components/ui/button';
import MouseGlow from './MouseGlow';
import { Mail, Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MouseGlow />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              Raju Ahmed
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground">
              Full Stack Web Developer
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build accessible, pixel-perfect digital experiences that not only look great but are meticulously built for performance and usability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              className="group"
              data-testid="button-contact"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="ghost"
              data-testid="button-resume"
              onClick={() => {
                // Option 1: Download a sample resume (you can replace this with your actual resume file)
                // For now, we'll create a contact action since no resume file exists
                
                // Option 2: Open email for resume request
                const subject = 'Resume Request - Raju Ahmed';
                const body = 'Hi Raju, I would like to request your resume. Please send it to me.';
                const emailUrl = `mailto:iamraju17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                window.open(emailUrl, '_blank');
                console.log('Resume request email opened');
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Currently info */}
          <div className="text-sm text-muted-foreground">
            Currently available for freelance projects and full-time opportunities
          </div>
        </div>
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" 
             style={{ animationDuration: '4s' }} />
      </div>
    </section>
  );
}