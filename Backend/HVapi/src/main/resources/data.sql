CREATE TABLE article (
  id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  contenu VARCHAR(250) NOT NULL,
  date date NOT NULL);
  
  
INSERT INTO article (name, contenu, date) VALUES  ('Article1', 'Ceci est le premier article', (TO_DATE('17/12/2015', 'DD/MM/YYYY')));
