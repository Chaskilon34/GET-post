Create database if not exists clientes_db;
use clientes_db;
create table clientes (
id int auto_increment primary key,
nombre varchar(100),
email varchar(100),
telefono varchar(20)
);
insert into clientes (nombre, email, telefono)
values
("matteo_hernandez", "matteito123@gmail.com", "3133052345"),
("julian_Sanchez", "Julli321@gmail.com", "3108922930"),
("daniela_Buitrago", "danibu210@gmail.com", "3042051155"),
("Sandra_Brooks", "sandri209@gmail.com", "3122988909");
CREATE TABLE productos (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre_prod VARCHAR(50),
stock INT,
precio INT
);
  
-- papu 
CREATE TABLE ventas(
id INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT NOT NULL,
id_producto INT NOT NULL,
cantidad INT NOT NULL,
precio_unitario DECIMAL(10,2) NOT NULL,
total DECIMAL (10,2),
FOREIGN KEY (id_cliente) REFERENCES clientes(id),
FOREIGN KEY (id_producto) REFERENCES productos(id)
);