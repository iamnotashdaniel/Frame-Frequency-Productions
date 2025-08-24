import React, { useRef, useState, useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

interface CounterProps {
  target: number;
  isVisible: boolean;
}

const Counter: React.FC<CounterProps> = ({ target, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 20);

            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 20);

            return () => clearInterval(timer);
        }
    }, [isVisible, target]);

    return (
        <div>
            <div className="font-display text-6xl text-gold font-bold">{count}</div>
            <p className="text-text-secondary mt-2">{count === target ? '' : '+'}</p>
        </div>
    );
}

const Impact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.3 });
    
    const counters = config.impact.counters;

    return (
        <section id="hook" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32 text-center border-b border-gray-800">
             <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-16 max-w-4xl mx-auto">{config.impact.title}</h2>
                <div className="flex flex-wrap justify-around gap-8">
                    {counters.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="font-display text-6xl text-gold font-bold">
                               <Counter target={item.target} isVisible={isVisible} />
                            </div>
                            <p className="mt-2 text-text-secondary">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;