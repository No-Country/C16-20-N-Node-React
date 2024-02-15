import { useState } from "react";

const RestauranteDashboard = () => {
  const [menus, setMenus] = useState([]);
  const [newMenu, setNewMenu] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newImage, setNewImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const addMenu = (event) => {
    event.preventDefault();
    setMenus([...menus, { name: newMenu, image: newImage, price: newPrice, description: newDescription }]);
    setNewMenu('');
    setNewImage(null);
    setShowForm(false);
    setNewPrice('');
    setNewDescription('');
  };

  const handleImageUpload = (event) => {
    setNewImage(URL.createObjectURL(event.target.files[0]));
  };
    return (
<>
  
<div className="flex-col w-[90%] bg-amber-200 md:flex md:flex-row md:justify-center space-y-4 md:space-x-4 p-2 md:p-4 md:w-[80%] mx-auto">
<article className="flex w-[100%] md:w-[50%] h-auto bg-white shadow rounded p-2">
    <div className="w-1/2  rounded-full ">
  <img src="/pagina-en-construccion.png" className="text-xl font-bold mb-2"/>
    </div>
    <div className="w-1/2 flex flex-col items-start justify-around pt-6">
  <p className="text-gray-700">Aquí va la información principal del restaurante.</p>
  <p className="text-gray-700">Aquí va la información principal del restaurante.</p>
  <p className="text-gray-700">Aquí va la información principal del restaurante.</p>
    </div>
</article>
<article className=" flex flex-col justify-center w-[100%] md:w-[50%]  h-auto bg-white shadow rounded p-4">
  <h2 className="text-xl font-bold mb-2">Agrega nuevos Menu</h2>
  <button className="mt-4 w-full px-4 py-2 text-white bg-blue-600 rounded-md" onClick={() => setShowForm(true)}>Agregar Nuevo Menú</button>
</article>
</div>

{/* {showForm && (
    <div className="flex justify-center">
    <form onSubmit={addMenu} className="justify-center mt-4 w-[50%] shadow-md rounded p-4">

      <label className="block text-gray-700">Nuevo Menú</label>
      <input className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" type="text" value={newMenu} onChange={(e) => setNewMenu(e.target.value)} required />
      
      <label className="block text-gray-700 mt-4">Descripción</label>
      <input className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required />
      
      <label className="block text-gray-700 mt-4">Precio</label>
      <input className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} required />
      
      <label className="block text-gray-700 mt-4">Imagen del Menú</label>
      <input className="mt-1" type="file" onChange={handleImageUpload} required />
      
      <button type="submit" className="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded-md">Guardar Menú</button>
      <button onClick={() => setShowForm(!showForm)} className="my-8 block text-blue-700 relative left-1.5 hover:text-blue-500">Cerrar</button>
    </form>
  </div>
  
  )} */}

{showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="w-[90%] md:w-[50%] bg-white p-4 rounded-md shadow-md">
            <form onSubmit={addMenu} className="mt-4">

              <label className="block text-gray-700">Nuevo Menú</label>
              <input
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                value={newMenu}
                onChange={(e) => setNewMenu(e.target.value)}
                required
              />

              <label className="block text-gray-700">Descripcion</label>
              <input
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                required
              />

<label className="block text-gray-700">Precio</label>
<input
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                type="text"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                required
              />

       <label className="block text-gray-700">Nueva Imagen</label>
              <input
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md"
                type="file"
                // onChange={handleImageUpload} required 
                onChange={ handleImageUpload }
                required
              />

              <button type="submit" className="mt-4 w-full px-4 py-2 text-white bg-green-600 rounded-md">
                Guardar Menú
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="mt-4 w-full px-4 py-2 text-white bg-red-600 rounded-md"
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>
      )}

<div className="flex justify-center space-x-4 p-3 w-[80%] mx-auto" >
<article className="flex flex-wrap mt-4">
  <h3 className="text-lg font-semibold mb-4 w-full">Mis Menús:</h3>
  {menus.map((menu, index) => (
    <div key={index} className="bg-white p-4 m-3 w-80 rounded-md shadow-md">
      {menu.image && (
        <img
          className="w-full h-40 object-cover rounded-md mb-4"
          src={menu.image}
          alt={menu.name}
        />
      )}
      <h4 className="text-xl font-semibold mb-2">{menu.name}</h4>
      <p className="text-gray-700 mb-2">Precio: {menu.price}</p>
      <p className="text-gray-700 mb-4">Descripción: {menu.description}</p>
      {/* Otros detalles o botones pueden ir aquí */}
    </div>
  ))}
</article>
</div>
</>
    )
}

export default RestauranteDashboard;