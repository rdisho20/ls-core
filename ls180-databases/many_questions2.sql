-- Create a table called authors with the following specifications:
-- •   id column that auto-increments and serves as primary key
-- •   name column that can hold up to 100 characters and cannot be null
-- •   birth_year column for integer values
-- •   nationality column that can hold up to 50 characters with a default value of 'Unknown'
-- Then insert these authors:
-- •   Harper Lee, born 1926, American
-- •   George Orwell, born 1903, British
-- •   Anonymous (birth year unknown, nationality unknown)
-- Solution Criteria
-- •   Table should be created with proper constraints
-- •   All three authors should be successfully inserted
-- •   The anonymous author should use default values where appropriate

-- CREATE TABLE authors (
--    id serial PRIMARY KEY,
--    name varchar(100) NOT NULL,
--    birth_year int,
--    nationality varchar(50) DEFAULT 'Unknown'
--  );

-- INSERT INTO authors (name, birth_year, nationality)
-- VALUES ('Harper Lee', 1926, 'American'),
-- ('George Orwell', 1903, 'British'),
-- ('Anonymous', NULL, DEFAULT);

-- CREATE TABLE books (
--   id serial PRIMARY KEY,
--   title varchar(50) NOT NULL
-- );

-- CREATE TABLE authors_books (
--   id serial PRIMARY KEY,
--   book_id int NOT NULL,
--   author_id int NOT NULL,
--   UNIQUE(book_id, author_id)
-- );

-- INSERT INTO books
-- (title)
-- VALUES
-- ('The Lord Of The Rings'),
-- ('Harry Potter'),
-- ('Game of Thrones');

-- INSERT INTO authors_books (
-- book_id, author_id)
-- VALUES
--   (1, 1),
--   (2, 1),
--   (3, 2);

-- --print title of book with author next to it, if nothing is connected do not to print for anything, using a subquery

-- CREATE TABLE categories (
--   id serial PRIMARY KEY,
--   category text NOT NULL UNIQUE
-- );

-- ALTER TABLE authors_books
-- ADD category_id int REFERENCES categories(id) ON DELETE CASCADE;-- 

-- INSERT INTO categories (category)
-- VALUES ('Fiction'), ('Non-fiction'), ('Scifi'),
-- ('Mystery'), ('Adventure'), 
-- ('Biography'), ('Autobiography');

-- CREATE TABLE books_categories (
--   id serial PRIMARY KEY,
--   book_id int REFERENCES books(id) ON DELETE CASCADE,
--   category_id int REFERENCES categories(id) ON DELETE CASCADE
-- );

-- INSERT INTO books_categories (book_id, category_id)
-- VALUES (1, 2), (1, 5), (2, 1), (2, 5), (3, 1), (3, 5), (3, 6);

-- print title, (agg authors), (agg categories), (# of categories)

-- get table w/ book title, the authors and categories for each book title, including ONLY books that include the category 'Fiction'

SELECT books.title, string_agg(authors.name, ', ') AS "authors", string_agg(categories.category, ', ') as "categories" , count(categories.id)
FROM books
JOIN authors_books ON authors_books.book_id = books.id
JOIN authors ON authors.id = authors_books.author_id
JOIN books_categories ON books.id = books_categories.book_id
JOIN categories ON categories.id = books_categories.category_id
GROUP BY books.title HAVING string_agg(categories.category, ', ') LIKE '%Fiction%'
ORDER BY books.title
