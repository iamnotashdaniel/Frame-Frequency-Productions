import React, { useState, useRef, FormEvent } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

const Contact: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.1 });
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // In a real app, you would send form data to a server here.
        setIsSubmitted(true);
    };

    const c = config.contact; // Shorthand for config object

    return (
        <section id="contact" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-center mb-12">
                    <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-4">{c.title}</h2>
                    <p className="max-w-xl mx-auto">{c.subtitle}</p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium">{c.form.name.label}</label>
                                <input type="text" id="name" name="name" required className="bg-surface border border-gray-700 rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"/>
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium">{c.form.email.label}</label>
                                <input type="email" id="email" name="email" required className="bg-surface border border-gray-700 rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"/>
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="phone" className="text-sm font-medium">{c.form.phone.label}</label>
                                <input type="tel" id="phone" name="phone" className="bg-surface border border-gray-700 rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"/>
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="service" className="text-sm font-medium">{c.form.service.label}</label>
                                <select id="service" name="service" className="bg-surface border border-gray-700 rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow">
                                    {c.form.service.options.map(opt => <option key={opt}>{opt}</option>)}
                                </select>
                            </div>
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <label htmlFor="details" className="text-sm font-medium">{c.form.details.label}</label>
                                <textarea id="details" name="details" rows={5} required className="bg-surface border border-gray-700 rounded-md p-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"></textarea>
                            </div>
                            <div className="sm:col-span-2 text-center">
                                <button type="submit" className="inline-block px-10 py-4 border border-gold rounded-full font-medium transition-all duration-300 bg-gold text-dark-bg hover:bg-transparent hover:text-gold hover:-translate-y-1">
                                    {c.form.submitButton}
                                </button>
                                <p className="text-xs text-text-secondary mt-4">{c.form.footnote}</p>
                            </div>
                        </form>
                    ) : (
                        <div id="form-success" className="text-center p-10 border border-gold rounded-lg bg-surface">
                            <h3 className="font-display text-gold text-3xl mb-4">{c.success.title}</h3>
                            <p>{c.success.message}</p>
                            <p className="mt-4">{c.success.calendarPrompt} <a href={c.success.calendarLinkHref} className="text-gold underline hover:text-white">{c.success.calendarLinkText}</a>.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;