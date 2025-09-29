import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Briefcase } from 'lucide-react';
import { useScrollAnimationById } from '@/hooks/useScrollAnimation';

export default function ContactSection() {
  const isVisible = useScrollAnimationById('contact-title');

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email for project inquiries',
      action: 'iamraju17@gmail.com',
      href: 'mailto:iamraju17@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      description: 'Quick chat and instant messaging',
      action: '@iamraju19',
      href: 'https://t.me/iamraju19'
    },
    {
      icon: Briefcase,
      title: 'Upwork',
      description: 'Professional freelance projects',
      action: 'View Profile',
      href: 'https://www.upwork.com/freelancers/~016ea67e7336508669'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          id="contact-title"
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'
          }`}
        >
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a project in mind or just want to chat, I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="p-6 hover-elevate transition-all duration-200">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      data-testid={`button-contact-${method.title.toLowerCase()}`}
                      onClick={() => {
                        console.log(`Opening ${method.title}: ${method.href}`);
                        window.open(method.href, '_blank');
                      }}
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground mb-4">
            Available for freelance projects and full-time opportunities
          </p>
          <Button
            size="lg"
            data-testid="button-primary-contact"
            onClick={() => {
              console.log('Primary contact clicked');
              window.open('mailto:iamraju17@gmail.com?subject=Project Inquiry', '_blank');
            }}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}