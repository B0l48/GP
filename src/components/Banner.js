// src/components/Banner.js
import React from 'react';

const Banner = () => {
    // Array de imágenes de videos destacados de Fórmula 1
    const featuredVideos = [
        { id: 1, imageUrl: '/img/hamilton.avif', title: 'British GP 2024' },
        { id: 2, imageUrl: '/img/russell.avif', title: 'Austrian GP 2024' },
        { id: 3, imageUrl: '/img/verstappen.avif', title: 'Spanish GP 2024' },
        { id: 4, imageUrl: '/img/verstappen.avif', title: 'Canadian GP 2024' },
    ];

    return (
        <section className="banner">
            <h2>Imágenes de videos destacados de Fórmula 1</h2>
            <div className="banner-images">
                {featuredVideos.map(video => (
                    <div key={video.id} className="banner-image">
                        <img src={video.imageUrl} alt={video.title} />
                        <div className="image-overlay">
                            <h3>{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Banner;
