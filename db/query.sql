SELECT * From reviews
JOIN reviews ON reviews.review = movies.id;

SELECT * FROM movies;
INSERT INTO movies (movie_name)
VALUES ('The Godfather');

UPDATE movies
SET review = ""
WHERE movie_id = 1;

DELETE from movies
WHERE id = 1;

SELECT * FROM reviews
JOIN movies ON reviews.movie_id = movies.id;