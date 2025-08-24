import React, { useRef } from 'react';
import { config } from '../data/config.ts';
import useOnScreen from '../hooks/useOnScreen.ts';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(sectionRef);

    return (
        <section id="about" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32 border-b border-gray-800">
            <div className={`grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="lg:col-span-2 flex justify-center md:justify-start">
                    <img src={config.site.founderImageUrl} alt="Ash Daniel, Founder" className="w-full max-w-sm md:max-w-xs rounded-lg shadow-2xl transition-all duration-400 hover:scale-105 hover:shadow-gold/20" />
                </div>
                <div className="lg:col-span-3 text-center md:text-left">
                    <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-6">{config.about.title}</h2>
                    <p className="max-w-prose mx-auto md:mx-0 mb-4">
                        {config.about.bio}
                    </p>
                    <div className="flex gap-3 justify-center md:justify-start flex-wrap my-6">
                        {config.about.highlights.map(highlight => (
                            <span key={highlight} className="bg-surface py-2 px-4 rounded-full text-sm border border-gray-700">{highlight}</span>
                        ))}
                    </div>
                    <a href={config.about.cta.href} onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block mt-4 px-7 py-3 border border-gold rounded-full font-medium transition-all duration-300 bg-transparent text-gold hover:bg-gold hover:text-dark-bg hover:-translate-y-1">
                        {config.about.cta.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;