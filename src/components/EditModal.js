// src/components/EditModal.js
import React, { useState } from 'react';

const EditModal = ({ isOpen, closeModal, video }) => {
    const [titulo, setTitulo] = useState(video ? video.titulo : '');
    const [categoria, setCategoria] = useState(video ? video.categoria : '');
    const [imagen, setImagen] = useState(video ? video.imagen : '');
    const [videoUrl, setVideoUrl] = useState(video ? video.videoUrl : '');
    const [descripcion, setDescripcion] = useState(video ? video.descripcion : '');

    const handleGuardar = async () => {
        try {
            const editedVideo = {
                ...video,
                titulo,
                categoria,
                imagen,
                videoUrl,
                descripcion
            };

            const response = await fetch(`http://localhost:3000/videos/${video.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedVideo),
            });

            if (response.ok) {
                console.log('Video actualizado correctamente');
                closeModal();
            } else {
                console.error('Error al actualizar el video');
            }
        } catch (error) {
            console.error('Error en la solicitud PUT:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Editar Video</h2>
                <form>
                    <label>
                        Título:
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </label>
                    <label>
                        Categoría:
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                            <option value="formula1">Fórmula 1</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">Backend</option>
                            <option value="innovacion">Innovación</option>
                            <option value="gestion">Gestión</option>
                        </select>
                    </label>
                    <label>
                        Imagen URL:
                        <input type="url" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                    </label>
                    <label>
                        Video URL:
                        <input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
                    </label>
                    <label>
                        Descripción:
                        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </label>
                    <button type="button" onClick={handleGuardar}>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
