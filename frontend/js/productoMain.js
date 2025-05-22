const API_URL_PROD = 'http://localhost:3000/api/productos';

document.getElementById('formProducto').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre_producto = document.getElementById('nombre_producto').value;
  const stock = document.getElementById('stock').value;
  const precio = document.getElementById('precio').value;

  try {
    const respuesta_prod = await fetch(API_URL_PROD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre_producto, stock, precio })
    });

    const datos_prod = await respuesta_prod.json();

    if (respuesta.ok) {
      alert(datos.mensaje);
      document.getElementById('formProducto').reset();
      cargarProductos();
    } else {
      alert('Error al agregar producto: ' + datos_prod.error);
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

async function cargarProductos() {
  try {
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
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

cargarProductos();