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

            {config.instagram.profileUrl && (
                <div className="flex justify-center gap-6 my-4">
                    <a href={config.instagram.profileUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-text-secondary hover:text-gold transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                </div>
            )}

            <p className="text-sm text-gray-500 mt-2">{config.footer.tagline}</p>
            <p className="text-xs text-gray-600 mt-8">© {new Date().getFullYear()} {config.footer.copyright}</p>
        </footer>
    );
};

export default Footer;