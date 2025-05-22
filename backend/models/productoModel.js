import {db} from '../config/db.js';

export const getProductos = (callback) => {
    db.query('select * from productos', callback);
};
export const addProducto = (productos, callback) => {
    db.query('insert into productos set ?', productos, callback);
};