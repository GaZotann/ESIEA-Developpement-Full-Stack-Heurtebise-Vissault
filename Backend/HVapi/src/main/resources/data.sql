CREATE TABLE articles (
  id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  contenu VARCHAR(250) NOT NULL,
  auteur VARCHAR(250) NOT NULL,
  date VARCHAR(250) NOT NULL);
  
  
INSERT INTO articles (name, contenu, auteur, date) VALUES  
('Article1', 'Ceci est le premier article','auteurtest1','17/12/2015');
