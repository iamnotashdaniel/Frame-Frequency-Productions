import React from 'react';
import { config } from '../data/config.ts';

const Footer: React.FC = () => {
    return (
        <footer className="py-10 text-center container mx-auto px-4">
            <a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block mb-5">
                <img src={config.site.logoUrl} alt="Frame & Frequency Productions Logo" className="h-12 mx-auto" />
            </a>
            <div className="my-4">
                <a href={`mailto:${config.footer.email}`} className="mx-2 text-text-secondary hover:text-gold transition-colors">{config.footer.email}</a>
                <span className="text-gray-600">|</span>
                <a href={`tel:${config.footer.phone.replace(/-/g, '')}`} className="mx-2 text-text-secondary hover:text-gold transition-colors">{config.footer.phone}</a>
            </div>
            <p className="text-sm text-gray-500 mt-2">{config.footer.tagline}</p>
            <p className="text-xs text-gray-600 mt-8">© {new Date().getFullYear()} {config.footer.copyright}</p>
        </footer>
    );
};

export default Footer;