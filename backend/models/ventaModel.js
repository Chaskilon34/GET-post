import {db} from '../config/db.js';

export const resgistrarVenta = (venta, callback) => {
    const {id_cliente, id_producto, cantidad} = venta;
    db.query('select precio, stock from productos where id = ?', [id_producto], (err, result) => {
        if (err) return callback(err);
        if (result.length === 0) {
            return callback(new Error('Producto no encontrado'));
        }
        const {precio, stock} = result[0];
        if (cantidad > stock) {
            return callback(new Error('Stock insuficiente'));
        }
        const total = precio * cantidad;

        db.query(
            'insert into ventas (id_cliente, id_producto, cantidad, precio_unitario, total) values (?, ?, ?, ?, ?)',
            [id_cliente, id_producto, cantidad, precio, total],
            (err, resultado) => {
                if (err) return callback(err);
                //actualizar el stock de productos
                db.query(
                    'update productos set stock = stock - ? where id = ?', [cantidad, id_producto], (err2) => {
                        if (err2) return callback(err2);
                        callback(null, resultado);
                    }
                );
            }
        )




    });
}