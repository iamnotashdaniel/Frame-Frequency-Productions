import React, { useState, useEffect, useRef } from 'react';
import { config } from '../data/config.ts';
import useOnScreen from '../hooks/useOnScreen.ts';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.3 });

    const testimonials = config.testimonials.items;

    useEffect(() => {
        if (!isVisible || testimonials.length === 0) return;
        
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isVisible, testimonials.length]);

    return (
        <section id="testimonials" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32 text-center border-b border-gray-800">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-12">{config.testimonials.title}</h2>
                <div className="relative overflow-hidden h-48 max-w-3xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-1000"
                            style={{ opacity: index === currentIndex ? 1 : 0 }}
                        >
                            <div className="text-gold text-2xl mb-4">★★★★★</div>
                            <p className="text-xl italic text-text-primary mb-4 max-w-2xl">{`"${testimonial.quote}"`}</p>
                            <p className="font-bold text-text-primary">{testimonial.client}</p>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-gold' : 'bg-surface border border-gray-600'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;