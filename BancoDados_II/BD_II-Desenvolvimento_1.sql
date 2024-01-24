CREATE TABLE aluno (
  nome varchar(30) not NULL, 
  email varchar(40) NOT NULL, 
  telefone int NOT NULL, 
  id_aluno SERIAL PRIMARY KEY);

CREATE TABLE biblioteca (
  nome_livro varchar(30) not NULL, 
  autor varchar(40) NOT NULL, 
  sessao int NOT NULL, 
  id_livro SERIAL PRIMARY KEY);

CREATE table locacao_livros (
  data_de_retirada DATE not NULL,
  professor_requisitante varchar(30) not NULL,
  aluno_requisitante int REFERENCES aluno (id_aluno),
  livro_requisitado int REFERENCES biblioteca (id_livro),
  id_locacao SERIAL PRIMARY KEY);
  	
	
INSERT INTO aluno VALUES 
    ('João Carlos', 'jcarlos@gmail.com', '99862514'),
    ('José Vitor', 'jvitor@gmail.com', '89562310'),
    ('Paulo André', 'pandr@gmail.com', '75186532'),
    ('Mariana Soares', 'mariso@gmail.com', '84513240'),
    ('Paola Maranhão', 'pama@gmail.com', '77485130'),
    ('Renato Ouvires', 'reou@gmail.com', '99781620'),
    ('Jean Ramom', 'jramo@gmail.com', '64625184'),
    ('Julio Pitangueira', 'jpita@gmail.com', '88254130');
             
   	
INSERT INTO biblioteca VALUES 
  	('Cobertor de neve', 'Iris Assis', '19'),
	('Ruandas', 'Carol de Cirque', '17'),
    ('Livro sobre a vida', 'Nicolau Aníbal', '13'),
    ('A busca por Fana', 'Amanda Nogueira', '11'),
    ('A Rua Desconhecida', 'Manuel Noel', '7'),
    ('Amor Esquecido', 'Manuel Noel', '7'),
    ('Labirinto', 'Rodrigo Fagundes', '5'),
    ('Segunda-feira', 'Caroline Nova ', '3'),
    ('Viagem ao Nepal', 'Caroline Nova', '3'),
    ('Coleção de arte', 'Natália Amídala', '2');

INSERT INTO locacao_livros VALUES 
  	('2023/12/18', 'Ronaldo Estevão', 3, 2),
    ('2023/12/17', 'Ronaldo Estevão', 2, 7),
    ('2023/12/16', 'Ronaldo Estevão', 2, 6),
    ('2023/12/16', 'Ronaldo Estevão', 6, 3),
    ('2023/12/21', 'Pietro Carujo', 5, 1),
    ('2023/12/20', 'Pietro Carujo', 5, 2),
    ('2023/12/20', 'Pietro Carujo', 2, 2),
    ('2023/12/19', 'Pietro Carujo', 3, 2),
    ('2023/12/19', 'Pietro Carujo', 4, 3),
    ('2023/12/15', 'Manu Cunhões', 1, 4),
    ('2023/12/18', 'Manu Cunhões', 1, 4);

SELECT 	locacao_livros.data_de_retirada,
		locacao_livros.professor_requisitante AS nome_do_professor,
        biblioteca.nome_livro AS nome_do_livro,
        aluno.nome AS nome_do_aluno
        from locacao_livros
        	left join biblioteca
			on locacao_livros.livro_requisitado = biblioteca.id_livro
    		LEFT JOIN aluno
   			on locacao_livros.aluno_requisitante = aluno.id_aluno
