import { useState } from "react";

const ProductoForm = () => {

    const [nombrePlatillo, setNombrePlatillo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [tiempoEspera, setTiempoEspera] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleImagenSeleccionada = (e) => {
        const imagenSeleccionada = e.target.files[0];
        setImagen(imagenSeleccionada);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-color1 min-w-max relative">
                <div className="absolute top-8 left-36">
                    <div className="w-32 h-32 bg-color2 rounded-full flex"></div>
                </div>
                <form onSubmit={handleSubmit} className="w-1/2 max-w-sm min-w-max">
                    <div className="mb-4">
                        <input
                            type="text"
                            id="nombrePlatillo"
                            value={nombrePlatillo}
                            placeholder='Nombre del platillo:'
                            onChange={(e) => setNombrePlatillo(e.target.value)}
                            className="rounded-full placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            type="text"
                            id="descripcion"
                            value={descripcion}
                            placeholder='Descripción:'
                            onChange={(e) => setDescripcion(e.target.value)}
                            className="resize-none rounded-3xl placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                            rows={4}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="precio"
                            value={precio}
                            placeholder='Precio:'
                            onChange={(e) => setPrecio(e.target.value)}
                            className="rounded-full placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="tiempoEspera"
                            value={tiempoEspera}
                            placeholder='Tiempo de espera:'
                            onChange={(e) => setTiempoEspera(e.target.value)}
                            className="rounded-full placeholder-black text-black bg-color1 border border-black w-full py-2 px-3 leading-tight focus:outline-none"
                        />
                    </div>
                    <div className="relative mb-4">
                        {/* Botón contenedor más grande */}
                        <div className="rounded-full placeholder-black text-black bg-color1 border border-black w-full py-1 px-3 leading-tight focus:outline-none">
                            <label htmlFor="imagen" className="flex rounded-lg bg-color2 text-black cursor-pointer py-1 px-3 w-32">
                                Subir imágen
                            </label>
                        </div>

                        {/* Input oculto para seleccionar archivo */}
                        <input
                            type="file"
                            id="imagen"
                            accept="image/*"
                            onChange={handleImagenSeleccionada}
                            className="hidden"
                        />
                    </div>

                    <div className="flex items-center justify-center mt-20">
                        <button
                            type="submit"
                            className="bg-color2 rounded-lg text-black py-4 px-20 text-2xl">
                            Aceptar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductoForm;