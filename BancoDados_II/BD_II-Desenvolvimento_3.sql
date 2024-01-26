CREATE TABLE cliente (
    ID SERIAL PRIMARY KEY,
    nome_cliente VARCHAR(40) NOT NULL
);

INSERT into cliente (nome_cliente) VALUES 
	('José'),
    ('Alfredo'),
    ('Rodolfo'),
    ('Marcela');

CREATE TABLE produto (
    ID SERIAL PRIMARY KEY,
    nome_produto VARCHAR(40) NOT NULL,
    quantidade_produto INT NOT NULL
);

INSERT into produto (nome_produto, quantidade_produto) VALUES 
	('bola', 10),
    ('peteca', 8),
    ('raquete', 5),
    ('argola', 6);
    
CREATE TABLE vendas (
    ID SERIAL PRIMARY KEY,
  	quantidade_comprada INT NOT NULL, 
    cliente_id INT NOT NULL,
    produto_id INT NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(ID),
    FOREIGN KEY (produto_id) REFERENCES produto(ID)
);

INSERT into vendas (quantidade_comprada, cliente_id, produto_id) VALUES 
	(1, 1, 2),
    (1, 2, 4),
    (2, 3, 1),
    (4, 4, 3);
   
DELIMITER //
CREATE PROCEDURE calcular_quantidade_comprada_cliente()
BEGIN
    SELECT SUM(quantidade_comprada) 
    FROM vendas
END //

DELIMITER ;

