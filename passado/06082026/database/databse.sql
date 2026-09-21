CREATE DATABASE meu_banco;
USE meu_banco;

CREATE TABLE usuario (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR (100) NOT NULL
);

INSERT INTO usuario (nome) VALUES ('SABRINA LINDA');
INSERT INTO usuario (nome) VALUES ('SABRINA GATA');
INSERT INTO usuario (nome) VALUES ('SABRINA FOFA');
INSERT INTO usuario (nome) VALUES ('SABRINA INTELIGENTE');
INSERT INTO usuario (nome) VALUES ('NAMORADO DA SABRINA');

ALTER TABLE usuario
ADD COLUMN telefone VARCHAR(20);

ALTER TABLE usuario
ADD COLUMN endereco VARCHAR(20);

INSERT INTO usuario (nome, telefone, endereco) VALUES ('VICTOR', ' (41) 98888 8888', 'Rua Victor Ama a própia namorada, 3092024');
SELECT * FROM usuario;