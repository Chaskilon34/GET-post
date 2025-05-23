const API_CLIENTES = 'http://localhost:3000/api/clientes';
const API_PRODUCTOS = 'http://localhost:3000/api/productos';
const API_VENTAS = 'http://localhost:3000/api/ventas';

document.getElementById('formVenta').addEventListener('submit',async (e) => {
    e.preventDefault();
    const id_cliente = document.getElementById('cliente').value;
    const id_producto = document.getElementById('producto').value;
    const id_cantidad = document.getElementById('cantidad').value;

    const res = await fetch(API_VENTAS, {
        method: 'POST',
        headers: { 'Content-type': 'applicatio/json' },
        body: JSON.stringify({id_cliente,id_producto,id_cantidad})
    });

    const data= await res.json();
    if(res.ok) {
        alert(data.mensaje);
        documen.getElementById('formVenta').reset();
        cargarVentas();
    }else {
        alert('Error: ' +data.err);
    }
});

async function cargarClientesYProductos () {
    const clientes = await(await fetch(API_CLIENTES)).json();
    const productos = await(await fetch(API_PRODUCTOS)).json();

    const clienteSelect = document.getElementById('cleinte');
    clienteSelect.innerHTML = '<option value=""> Seleccione cliente </option>';
    clientes.forEach( c => {
        clienteSelect.innerHTML += `<option value="${c.id}">${c.nombre} </option>`;
    });
    const productoSelect = document.getElementById('producto');
    productoSelect.innerHTML = '<option value=""> Seleccione producto </option>';
    productos.forEach( c => {
        productoSelect.innerHTML += `<option value="${p.id}">${p.nombre_prod} ( stock: ${p.stock})</option>`;
    });

}

async function cargarVentas() {
    const ventas = await(await fetch(API_VENTAS)).json();
    const tabla = document.getElementById('tablaVentas');
    tabla.innerHTML = '';
    ventas.forEach(v => {
        tabla.innerHTML += `
        <tr>
        <td>${v.id}</td>
        <td>${v.cliente}</td>
        <td>${v.producto}</td>
        <td>${v.cantidad}</td>
        <td>${v.precio_unitario}</td>
        <td>${v.total}</td>
        <td>${new Date(v.fecha).toLocaleString} </td>
        </tr>`;
    });
}
cargarClientesYProductos();
cargarVentas();