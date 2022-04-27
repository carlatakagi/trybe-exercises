INSERT INTO sakila.actor (first_name, last_name) VALUES
('Keanu', 'Reeves'),
('Carrie-Anne', 'Moss');

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;

INSERT INTO sakila.film (title, language_id, rental_duration, rental_rate, replacement_cost) VALUES
('Matrix 4', 1, 5, 4.99, 11.99); 
SELECT * FROM sakila.film ORDER BY last_update;

INSERT INTO sakila.film_actor (actor_id,film_id) VALUES
(201, 1001),
(202, 1002);