import React, { useRef, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen.ts';
import { config } from '../data/config.ts';

const Portfolio: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(sectionRef, { threshold: 0.2 });
    const [activeVideo, setActiveVideo] = useState(config.portfolio.videos[0]);

    return (
        <section id="portfolio" ref={sectionRef} className="container mx-auto px-4 py-20 lg:py-32 text-center border-b border-gray-800">
            <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-text-primary text-4xl lg:text-5xl mb-12">{config.portfolio.title}</h2>
                
                {/* Main Video Player */}
                <div className="w-full aspect-video rounded-lg mb-8 bg-black shadow-2xl shadow-black/50 overflow-hidden">
                    <iframe
                        key={activeVideo.id} // Key ensures iframe re-renders on video change
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&controls=1&showinfo=0`}
                        title={activeVideo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Video Thumbnails Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {config.portfolio.videos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className={`relative group aspect-video rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-dark-bg transition-all duration-300 ${activeVideo.id === video.id ? 'ring-2 ring-gold' : 'ring-1 ring-gray-800 hover:ring-gold'}`}
                        >
                            <img 
                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                                alt={video.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                </svg>
                            </div>
                             <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                                <h4 className="text-white text-xs font-semibold truncate">{video.title}</h4>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;