import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

const InstagramFeed: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.1 });
    const { title, cta, posts, username } = config.instagram;

    return (
        <section id="instagram" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32 border-b border-gray-800">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-center mb-12">
                    <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-4">{title}</h2>
                    <p className="text-xl text-gold">{username}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={post.postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group aspect-square block bg-surface rounded-lg overflow-hidden relative"
                            aria-label={`View Instagram post ${post.id}`}
                        >
                            <img
                                src={post.imageUrl}
                                alt={`Instagram post ${post.id}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center">
                    <a href={cta.href} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 border border-gold rounded-full font-medium transition-all duration-300 bg-gold text-dark-bg hover:bg-transparent hover:text-gold hover:-translate-y-1">
                        {cta.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;