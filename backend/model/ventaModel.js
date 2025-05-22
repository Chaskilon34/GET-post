import { db } from  '../config/db.js';

export const registrarVenta = (venta, callback) => {
    const{ id_cliente, id_producto , cantidad} = venta;
    db.query('select precio, stock form productos where id = ?', [id_producto], (err,results) => {
        if (err) return callback(err);
        if (results.length === 0) {
            return callback(new Error ('producto no encontrado'));
        
        }
        const{ precio, stock } = results[0];
        if (cantidad > stock ) {
            return callback (new Error('Stock insuficiente'));
        }
        const total = precio * cantidad;

        db.query(
            'insert in to ventas(id_cliente, id_producto, cantidad, precio_unitario, total)values (?,?,?,?,?)',
            [id_cliente, id_producto, cantidad, precio, total],
            (err, resultado) =>{
                if (err) return callback(err);
                // vamos hacer un query para actualizar tabla productos a la hora de descontar(compar algo)
                db.query('update productos set stock = stock - ? where id = ?',[cantidad, id_producto], (err2) => {
                   if (err2) return callback(err2);
                   callback(null, resultado);  
                });
            }
        )

















































    })
}