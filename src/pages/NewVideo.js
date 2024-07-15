//new video
import React, { useState } from 'react';

const NuevoVideo = () => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nuevoVideo = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        };

        try {
            const response = await fetch('http://localhost:3000/videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoVideo)
            });

            if (response.ok) {
                console.log('Nuevo video creado correctamente');

            } else {
                console.error('Error al crear el nuevo video');
            }
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        }
    }

    return (
        <div className="nuevo-video">
            <h2>Crear Nuevo Video</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </label>
                <label>
                    Categoría:
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                        <option value="">Selecciona una categoría</option>
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="innovacion">Innovación</option>
                        <option value="gestion">Gestión</option>
                    </select>
                </label>
                <label>
                    Imagen URL:
                    <input type="url" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
                </label>
                <label>
                    Video URL:
                    <input type="url" value={video} onChange={(e) => setVideo(e.target.value)} required />
                </label>
                <label>
                    Descripción:
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </label>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default NuevoVideo;

