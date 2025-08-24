import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

const ServiceCard: React.FC<{ title: string; description: string; index: number }> = ({ title, description, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(cardRef, { threshold: 0.2 });

    return (
        <div 
            ref={cardRef}
            className={`bg-surface p-8 rounded-lg border border-gray-800 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms`}}
        >
            <h3 className="font-display text-gold text-2xl mb-4">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isTitleVisible = useOnScreen(titleRef);

    return (
        <section id="services" className="container mx-auto px-4 py-20 lg:py-32 border-b border-gray-800">
            <h2 
                ref={titleRef}
                className={`text-center font-display text-text-primary text-4xl lg:text-5xl mb-16 transition-all duration-1000 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {config.services.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {config.services.items.map((service, index) => (
                    <ServiceCard key={service.title} title={service.title} description={service.description} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Services;