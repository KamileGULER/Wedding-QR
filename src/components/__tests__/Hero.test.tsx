import { render, screen } from '@testing-library/react';
import Hero from '../Hero.tsx';
import { siteConfig } from '../../site.config';

describe('Hero Component', () => {
  it('renders hero title correctly', () => {
    render(<Hero />);
    expect(screen.getByText(siteConfig.texts.hero.title)).toBeInTheDocument();
  });

  it('renders hero subtitle correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/Düğünümüze hoş geldiniz/)).toBeInTheDocument();
  });

  it('renders with site config values', () => {
    render(<Hero />);
    
    // Test that it renders the default values from site.config.ts
    expect(screen.getByText(siteConfig.texts.hero.title)).toBeInTheDocument();
    expect(screen.getByText(/Düğünümüze hoş geldiniz/)).toBeInTheDocument();
  });

  it('has correct CSS classes', () => {
    render(<Hero />);
    const heroSection = screen.getByText(siteConfig.texts.hero.title).closest('section');
    expect(heroSection).toHaveClass('hero', 'hero-particles-bg');
  });
}); 