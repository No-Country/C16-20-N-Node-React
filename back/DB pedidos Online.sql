CREATE database pedidos_online;

USE pedidos_online;

-- drop table  if exists usuarios;

create  table IF NOT EXISTS usuarios (
	id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	user varchar (25),
    password varchar (25),
    rol_usuario varchar (25)
);

-- drop table  if exists clientes;

create table IF NOT EXISTS clientes (
	id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_cliente varchar (100) NOT NULL,
    direccion_cliente varchar(100) NOT NULL,
    mail_cliente varchar(100),
	telefono_cliente int NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- drop table  if exists repartidores;

create  table IF NOT EXISTS repartidores (
	id_repartidor INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_repartidor varchar (100) NOT NULL,
    direccion_repartidor varchar(100) NOT NULL,
    mail_repartidor varchar(100),
	telefono_repartidor int NOT NULL,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- drop table  if exists restaurantes;

create  table IF NOT EXISTS restaurantes (
	id_restaurant INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_restaurant varchar (100) NOT NULL,
    direccion_restaurant varchar(100) NOT NULL,
    mail_restaurant varchar(100),
	telefono_restaurant int NOT NULL,
	rubro_restaurant varchar(50),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- drop table  if exists productos;

create  table IF NOT EXISTS productos (
	id_producto INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_producto varchar(100) NOT NULL,
    descripcion_producto varchar (50),
	precio_producto int,
    id_restaurant INT,
	FOREIGN KEY (id_restaurant) REFERENCES restaurantes(id_restaurant)
);

-- drop table  if exists metodo_pago;

create  table IF NOT EXISTS metodo_pago (
	id_pago INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_metodo_pago varchar (50),
    id_producto INT,
	foreign key (id_producto) references productos(id_producto)
);

-- drop table  if exists envios;

create  table IF NOT EXISTS envios (
	id_envio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	distancia varchar (50),
    costo INT,
    id_producto INT,
	foreign key (id_producto) references productos(id_producto)
);

-- drop table  if exists pedidos;

create  table IF NOT EXISTS pedidos (
	id_pedido INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    id_restaurant INT,
    id_repartidor INT,
	foreign key (id_cliente) references clientes(id_cliente),
    foreign key (id_restaurant) references restaurantes(id_restaurant),
    foreign key (id_repartidor) references repartidores(id_repartidor)
);

-- drop table  if exists envios;

create  table IF NOT EXISTS envios (
	id_envio INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	distancia int,
    costo int
);

drop table  if exists pago_productos;

create  table IF NOT EXISTS pago_productos (
	id_pago_producto INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_producto INT,
    id_pago INT,
	foreign key (id_producto) references productos(id_producto),
    foreign key (id_pago) references metodo_pago(id_pago)
);

drop table  if exists promocion;

create  table IF NOT EXISTS promocion (
	id_promocion INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nombre_promocion varchar (50),
    id_producto INT,
	foreign key (id_producto) references productos(id_producto)
);
