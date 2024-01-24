CREATE TABLE aluno (
  nome varchar(30) not NULL, 
  email varchar(40) NOT NULL, 
  endereco varchar(50) NOT NULL, 
  id SERIAL PRIMARY KEY NOT NULL);

CREATE TABLE biblioteca (
  nome_livro varchar(30) not NULL, 
  autor varchar(40) NOT NULL, 
  sessao int NOT NULL, 
  id SERIAL PRIMARY KEY NOT NULL);

INSERT INTO aluno VALUES 
	('João Carlos', 'jcarlos@gmail.com', 'Rua 13 de maio'),
    ('José Vitor', 'jvitor@gmail.com', 'Rua da Saudade'),
    ('Paulo André', 'pandr@gmail.com', 'Rua do Sol')
   	
INSERT INTO biblioteca VALUES 
	('Livro sobre a vida', 'Nicolau Aníbal', '13');
    ('A busca por Fana', 'Amanda Nogueira', '11');
    ('A Rua Desconhecida', 'Manuel Noel', '7');
    ('Amor Esquecido', 'Manuel Noel', '7');
    ('Labirinto', 'Rodrigo Fagundes', '5');



