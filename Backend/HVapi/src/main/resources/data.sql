CREATE TABLE articles (
  id BIGINT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  contenu VARCHAR(250) NOT NULL,
  auteur VARCHAR(250) NOT NULL,
  date VARCHAR(250) NOT NULL);
  
CREATE TABLE categories 
(category_id BIGINT AUTO_INCREMENT  PRIMARY KEY,
name VARCHAR(250) NOT NULL);
  
CREATE TABLE category_article (
    category_id BIGINT NOT NULL,
    article_id BIGINT NOT NULL);
    
INSERT INTO categories (name) VALUES  ('Histoire'),
  ('Geographie');
  
INSERT INTO articles (name, contenu, auteur, date) VALUES  
('Article1', 'Ceci est le premier article','auteurtest1','17/12/2015'),
('Article2', 'Ceci est le deuxieme article', 'auteurtest2','12/04/2021'),
('Article3', 'Ceci est le 3eme article', 'auteurtest3','19/04/2021');

INSERT INTO category_article (category_id, article_id) VALUES    (1,1),
    (2,2),
    (2,3),
    (1,3);