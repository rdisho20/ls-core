/*
CoderPad provides a basic SQL sandbox with the following schema.
You can also use commands like '\dt;' and '\d employees;'

employees                             projects
+---------------+---------+           +---------------+---------+
| id            | int     |<----+  +->| id            | int     |
| first_name    | varchar |     |  |  | title         | varchar |
| last_name     | varchar |     |  |  | start_date    | date    |
| salary        | int     |     |  |  | end_date      | date    |
| department_id | int     |--+  |  |  | budget        | int     |
+---------------+---------+  |  |  |  +---------------+---------+
                             |  |  |
departments                  |  |  |  employees_projects
+---------------+---------+  |  |  |  +---------------+---------+
| id            | int     |<-+  |  +--| project_id    | int     |
| name          | varchar |     +-----| employee_id   | int     |
+---------------+---------+           +---------------+---------+
*/

-- SELECT e.first_name, e.last_name, e.salary,
  -- d.name as department_name
-- FROM employees   AS e
-- JOIN departments AS d ON e.department_id = d.id;


/*
movie theater
movies
screening rooms
movie times
seat rows
tickets
customers


cardinality:
movie theater -> movies
one -> many

movie theater -> screening rooms
one -> many

movies -> screening_rooms
many -> many

    movies_screening_rooms (join table) (alias 'showing')
    - id PK
    - screening_room_id 1, 2 UNIQUE (screening_room_id, movie_id, start_time)
    - movie_id 1, 2
    - start_time 

(1, 2, 12pm), (2, 2, 12pm), (3, 2, 12pm), (3, 2, 2pm)

Theater B (1, 2, 12pm)

screening room -> seats
one -> many

seats -> tickets
one -> many

customers -> tickets
one -> many

movies_screenings_rooms -> tickets
one -> many
      tickets 
        - id
        - movies_screenings_id



modality:
movie theater -> movies
  1 (required) ------- 0 (optional)

movie theater -> screening rooms
  1 (required) ----- 1 (required)

screening room -> movies
  1 (required) ----- 0 (optional)

movies_screening_rooms -> movies
  0 (optional) ----- 1 (required)


movies_screenings_rooms -> screening_rooms
 0 (optional) ----- 1 (required)

screening rooms -> seats
  1 (required) ----- 1 (required))

seats -> tickets
  1 (required) ----- 0 (optional)

customers -> tickets
  1 (required) -> 1 (required)

movies_screenings_rooms -> tickets
 1 (required) -> 0 (optional)

*/

-- CREATE TABLE movies (
--   id serial PRIMARY KEY,
--   title varchar(255) NOT NULL UNIQUE,
--   director varchar(255) NOT NULL,
--   duration integer NOT NULL
-- );

-- CREATE TABLE screening_rooms (
--   id serial PRIMARY KEY,
--   wing varchar(10) NOT NULL,
--   number int NOT NULL UNIQUE
-- );

-- CREATE TABLE movies_screening_rooms (
--   id serial PRIMARY KEY,
--   screening_room_id integer NOT NULL REFERENCES screening_rooms (id),
--   movie_id integer NOT NULL REFERENCES movies (id),
--   start_time timestamp without time zone NOT NULL,
--   UNIQUE (screening_room_id, movie_id, start_time)
-- );

-- CREATE TABLE seats (
--   id serial PRIMARY KEY,
--   row int NOT NULL,
--   number int NOT NULL,
--   screening_room_id int NOT NULL
--   REFERENCES screening_rooms (id)
-- );

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   name varchar(255) NOT NULL,
--   email varchar(100)
-- );

-- CREATE TABLE tickets (
--   id serial PRIMARY KEY,
--   seat_id int NOT NULL
--   REFERENCES seats (id),
--   movies_screening_rooms_id int NOT NULL
--   REFERENCES movies_screening_rooms (id),
--   customer_id int NOT NULL
--   REFERENCES customers (id)
-- );

-- INSERT INTO movies (title, director, duration) VALUES
-- ('The Shawshank Redemption', 'Frank Darabont', 142),
-- ('The Godfather', 'Francis Ford Coppola', 175),
-- ('The Dark Knight', 'Christopher Nolan', 152),
-- ('Pulp Fiction', 'Quentin Tarantino', 154),
-- ('Forrest Gump', 'Robert Zemeckis', 142),
-- ('Inception', 'Christopher Nolan', 148),
-- ('The Matrix', 'Lana Wachowski, Lilly Wachowski', 136),
-- ('Goodfellas', 'Martin Scorsese', 146),
-- ('Se7en', 'David Fincher', 127),
-- ('The Silence of the Lambs', 'Jonathan Demme', 118);

-- ALTER TABLE screening_rooms
-- DROP CONSTRAINT screening_rooms_number_key,
-- ADD UNIQUE (wing, number);

-- INSERT INTO customers (name, email) VALUES
-- ('Alice Johnson', 'alice.j@email.com'),
-- ('Bob Smith', 'bob.s@email.com'),
-- ('Charlie Brown', 'charlie.b@email.com'),
-- ('Diana Prince', 'diana.p@email.com'),
-- ('Ethan Hunt', 'ethan.h@email.com'),
-- ('Fiona Glenanne', 'fiona.g@email.com'),
-- ('George Costanza', 'george.c@email.com'),
-- ('Hannah Montana', 'hannah.m@email.com'),
-- ('Ian Malcolm', 'ian.m@email.com'),
-- ('Jane Doe', 'jane.d@email.com');

-- DELETE FROM screening_rooms;

-- ALTER SEQUENCE screening_rooms_id_seq RESTART 1;

-- INSERT INTO screening_rooms (wing, number) VALUES
-- ('A', 1),
-- ('A', 2),
-- ('A', 3),
-- ('B', 1),
-- ('B', 2),
-- ('B', 3),
-- ('C', 1),
-- ('C', 2),
-- ('C', 3),
-- ('D', 1);

-- DELETE FROM seats;
-- DELETE FROM movies_screening_rooms;

-- ALTER SEQUENCE seats_id_seq RESTART 1;
-- ALTER SEQUENCE movies_screening_rooms_id_seq RESTART 1;

-- INSERT INTO seats (row, number, screening_room_id) VALUES
-- -- 10 seats for screening room 1
-- (1, 1, 1),
-- (1, 2, 1),
-- (1, 3, 1),
-- (1, 4, 1),
-- (1, 5, 1),
-- (2, 1, 1),
-- (2, 2, 1),
-- (2, 3, 1),
-- (2, 4, 1),
-- (2, 5, 1),
-- -- 10 seats for screening room 2
-- (1, 1, 2),
-- (1, 2, 2),
-- (1, 3, 2),
-- (1, 4, 2),
-- (1, 5, 2),
-- (2, 1, 2),
-- (2, 2, 2),
-- (2, 3, 2),
-- (2, 4, 2),
-- (2, 5, 2);

-- INSERT INTO movies_screening_rooms (screening_room_id, movie_id, start_time) VALUES
-- (1, 1, '2023-10-27 18:00:00'),
-- (1, 2, '2023-10-27 21:00:00'),
-- (2, 3, '2023-10-27 18:30:00'),
-- (2, 4, '2023-10-27 21:30:00'),
-- (3, 5, '2023-10-28 19:00:00'),
-- (3, 6, '2023-10-28 22:00:00'),
-- (4, 7, '2023-10-28 19:30:00'),
-- (4, 8, '2023-10-28 22:30:00'),
-- (5, 9, '2023-10-29 20:00:00'),
-- (5, 10, '2023-10-29 23:00:00');


-- INSERT INTO tickets (seat_id, movies_screening_rooms_id, customer_id) VALUES
-- (1, 1, 1),  -- Alice, Seat 1, for screening 1
-- (2, 1, 2),  -- Bob, Seat 2, for screening 1
-- (11, 3, 3), -- Charlie, Seat 11, for screening 3
-- (12, 3, 4), -- Diana, Seat 12, for screening 3
-- (3, 1, 5),  -- Ethan, Seat 3, for screening 1
-- (13, 3, 6), -- Fiona, Seat 13, for screening 3
-- (4, 1, 7),  -- George, Seat 4, for screening 1
-- (14, 3, 8), -- Hannah, Seat 14, for screening 3
-- (5, 1, 9),  -- Ian, Seat 5, for screening 1
-- (15, 3, 10);-- Jane, Seat 15, for screening 3


-- How many customer bought tickets for the 2023-10-27 18:00:00 showing of The Shawshank Redemption?

SELECT COUNT(customer_id) AS "Customers" FROM tickets
WHERE movies_screening_rooms_id = (
  SELECT id FROM movies_screening_rooms
  WHERE movie_id = (
    SELECT id FROM movies
    WHERE title = 'The Shawshank Redemption'
  )
);

-- SELECT id FROM movies WHERE title = 'The Shawshank Redemption';

-- SELECT id FROM movies_screening_rooms WHERE movie_id = 1;

-- SELECT COUNT(customer_id) AS "Customers" FROM tickets;