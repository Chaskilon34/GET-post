const API_URL_PROD = 'http://localhost:3000/api/productos';

document.getElementById('formProducto').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre_prod = document.getElementById('nombre_prod').value;
  const stock = document.getElementById('stock').value;
  const precio = document.getElementById('precio').value;

  try {
    const respuesta = await fetch(API_URL_PROD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_prod, stock, precio })
    });

    const datos_prod = await respuesta.json();

    if (respuesta.ok) {
      alert(datos_prod.mensaje); // ✅ corregido: antes decía datos.mensaje
      document.getElementById('formProducto').reset();
      cargarProductos();
    } else {
      alert('Error al agregar Producto: ' + datos_prod.error); // ✅ corregido
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

async function cargarProductos() {
  const res = await fetch(API_URL_PROD);
  const datos = await res.json();
  const tabla = document.getElementById('tablaProductos');
  tabla.innerHTML = '';

  datos.forEach(producto => {
    tabla.innerHTML += `
      <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre_prod}</td>
        <td>${producto.stock}</td>
        <td>${producto.precio}</td>
      </tr>
    `;
  });
}

cargarProductos();
