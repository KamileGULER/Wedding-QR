import { render, screen } from '@testing-library/react';
import Hero from '../Hero.tsx';

describe('Hero Component', () => {
  it('renders hero title correctly', () => {
    render(<Hero />);
    expect(screen.getByText('Raşit & Beyza')).toBeInTheDocument();
  });

  it('renders hero subtitle correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/Düğünümüze hoş geldiniz/)).toBeInTheDocument();
  });

  it('renders with custom props', () => {
    const customTitle = 'Custom Title';
    const customSubtitle = 'Custom Subtitle';
    
    render(<Hero title={customTitle} subtitle={customSubtitle} />);
    
    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });

  it('has correct CSS classes', () => {
    render(<Hero />);
    const heroSection = screen.getByText('Raşit & Beyza').closest('section');
    expect(heroSection).toHaveClass('hero', 'hero-particles-bg');
  });
}); 