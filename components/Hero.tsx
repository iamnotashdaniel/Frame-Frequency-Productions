import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

const Hero: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center container mx-auto px-4 py-20 relative overflow-hidden">
            <div ref={ref} className={`z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <img 
                  src={config.site.logoUrl} 
                  alt="Frame & Frequency Productions Logo" 
                  className="h-56 md:h-64 mx-auto mb-8 transition-opacity duration-1000"
                  style={{ opacity: isVisible ? 1 : 0 }}
                />
                <h1 className="font-display text-text-primary text-5xl md:text-6xl lg:text-7xl leading-tight mb-5">
                    {config.hero.title}
                </h1>
                <p className="text-xl text-text-primary max-w-2xl mx-auto mb-10 transition-opacity duration-1000 delay-300" style={{ opacity: isVisible ? 1 : 0 }}>
                    {config.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-6 transition-opacity duration-1000 delay-500" style={{ opacity: isVisible ? 1 : 0 }}>
                    <a href={config.hero.ctaPrimary.href} onClick={(e) => scrollTo(e, 'contact')} className="inline-block px-8 py-3 border border-gold rounded-full font-medium transition-all duration-300 bg-gold text-dark-bg hover:bg-transparent hover:text-gold hover:-translate-y-1">
                        {config.hero.ctaPrimary.text}
                    </a>
                    <a href={config.hero.ctaSecondary.href} onClick={(e) => scrollTo(e, 'portfolio')} className="inline-block px-8 py-3 border border-gold rounded-full font-medium transition-all duration-300 bg-transparent text-gold hover:bg-gold hover:text-dark-bg hover:-translate-y-1">
                        {config.hero.ctaSecondary.text}
                    </a>
                </div>
                <p className="text-sm text-text-secondary transition-opacity duration-1000 delay-700" style={{ opacity: isVisible ? 1 : 0 }}>
                    {config.hero.footnote}
                </p>
            </div>
        </section>
    );
};

export default Hero;