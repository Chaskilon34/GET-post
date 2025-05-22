import mysql from 'mysql2';
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jorgeluis1405',
    database: 'clientes_dv'
});
db.connect(err =>{
    if(err) throw err;
    console.log("Conectado a la base de datos de MYSQL");
});