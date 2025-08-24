import React, { useState, useEffect } from 'react';
import { config } from '../data/config.ts';

const Header: React.FC = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 left-0 w-full px-[5%] z-40 transition-all duration-300 ${isSticky ? 'py-3 bg-dark-bg/80 backdrop-blur-sm border-b border-gray-800' : 'py-5'}`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <img src={config.site.logoUrl} alt="Frame & Frequency Productions Logo" className="h-10 transition-transform duration-300 hover:scale-105" />
                </a>
                <nav>
                    <a href={config.header.cta.href} onClick={scrollToContact} className="inline-block px-7 py-3 border border-gold rounded-full font-medium text-sm transition-all duration-300 bg-gold text-dark-bg hover:bg-transparent hover:text-gold hover:-translate-y-0.5">
                        {config.header.cta.text}
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;