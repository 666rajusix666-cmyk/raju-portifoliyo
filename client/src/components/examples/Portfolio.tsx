import Portfolio from '../../pages/Portfolio';
import { ThemeProvider } from '../ThemeProvider';

export default function PortfolioExample() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}