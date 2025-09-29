import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Raju Ahmed</h3>
            <p className="text-muted-foreground">Full Stack Web Developer</p>
          </div>
          
          <SocialLinks />
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Raju Ahmed. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}