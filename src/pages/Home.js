// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error al obtener videos:', error));
    }, []);

    return (
        <div className="home">
            {/* Renderizar videos de Fórmula 1 */}
            <h2>Fórmula 1</h2>
            <div className="category-videos">
                {videos.filter(video => video.category === 'formula1').map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>

            <h2>Frontend</h2>
            <div className="category-videos">
                {videos.filter(video => video.category === 'frontend').map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>

            <h2>Backend</h2>
            <div className="category-videos">
                {videos.filter(video => video.category === 'backend').map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>

            <h2>Innovación</h2>
            <div className="category-videos">
                {videos.filter(video => video.category === 'innovacion').map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>

            <h2>Gestión</h2>
            <div className="category-videos">
                {videos.filter(video => video.category === 'gestion').map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
}

export default Home;
