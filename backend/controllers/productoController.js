import { getProductos, addProducto } from '../model/productoModel.js';

export const obtenerProductos = (req, res) => {
  getProductos((err, resultados) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(resultados);
  });
};

export const crearProducto = (req, res) => {
  const producto = req.body;
  addProducto(producto, (err, resultado) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto agregado', id: resultado.insertId });
  });
};
