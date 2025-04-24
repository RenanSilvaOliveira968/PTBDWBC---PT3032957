
/* Questão 01 */

CREATE TABLE PESSOA (
  id int Primary Key,
  nome varchar(30),
  sobrenome varchar(30),
  idade int,
  CHECK (idade > 0),
);


/* Questão 02 */

ALTER TABLE PESSOA 
  ADD constraint unificador unique (id,nome, sobrenome);

/* Questão 03 */

ALTER TABLE PESSOA
ALTER column idade int not null;

/* Questão 04 */

CREATE TABLE ENDERECO (
 id_endereco int primary key,
 rua varchar(30),
);

ALTER TABLE PESSOA
ADD id_end int;

ALTER TABLE PESSOA
ADD constraint FK_PESSOA_ENDERECO 
foreign key (id_end) references ENDERECO(id_endereco);
