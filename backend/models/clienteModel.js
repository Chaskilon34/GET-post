
import {db} from '../config/db.js';

export const getClientes = (callback) => {
    db.query('select * from clientes', callback);
};
export const addCliente = (clientes, callback) => {
    db.query('insert into clientes set ?', clientes, callback);
};