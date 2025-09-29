import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MessageCircle, Facebook } from 'lucide-react';
import { SiUpwork, SiX } from 'react-icons/si';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:iamraju17@gmail.com',
    icon: Mail,
    color: 'hover:text-red-500'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-raju-ahmed-055087224/',
    icon: Linkedin,
    color: 'hover:text-blue-500'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/iamraju19',
    icon: MessageCircle,
    color: 'hover:text-blue-400'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/iamraju18',
    icon: Facebook,
    color: 'hover:text-blue-600'
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/iamraju_21',
    icon: SiX,
    color: 'hover:text-gray-400'
  },
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~016ea67e7336508669',
    icon: SiUpwork,
    color: 'hover:text-green-500'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.name}
            variant="outline"
            size="icon"
            className={`transition-all duration-200 ${link.color} hover:border-current hover:scale-110`}
            data-testid={`button-social-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
            onClick={() => {
              console.log(`Opening ${link.name}: ${link.href}`);
              window.open(link.href, '_blank');
            }}
          >
            <Icon className="w-5 h-5" />
            <span className="sr-only">{link.name}</span>
          </Button>
        );
      })}
    </div>
  );
}