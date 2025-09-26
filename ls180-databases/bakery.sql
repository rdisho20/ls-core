 CREATE TABLE bakery (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  specialty VARCHAR(50) NOT NULL
);

-- -- Bakers: each baker works at one bakery (many-to-one)
-- CREATE TABLE bakers (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   bakery_id INT NOT NULL REFERENCES bakery(id)
-- );

-- -- Goods: self-join allows composite goods
-- CREATE TABLE goods (
--   id SERIAL PRIMARY KEY,
--   good_name VARCHAR(50) NOT NULL,
--   is_base_of INT REFERENCES goods(id)
-- );

-- -- Bakers to Goods: many-to-many (who makes what)
-- CREATE TABLE bakers_goods (
--   baker_id INT NOT NULL REFERENCES bakers(id),
--   good_id INT NOT NULL REFERENCES goods(id),
--   PRIMARY KEY (baker_id, good_id)
-- );

-- -- Bakeries
-- INSERT INTO bakery (name, specialty) VALUES
--   ('Sunrise Bakes', 'Bread'),
--   ('Cookie Kingdom', 'Cookies'),
--   ('Pie Palace', 'Pies');

-- -- Bakers (12 total, assigned to the 3 bakeries)
-- INSERT INTO bakers (name, bakery_id) VALUES
--   ('Alice', 1),
--   ('Bob', 1),
--   ('Clara', 1),
--   ('Daniel', 2),
--   ('Eva', 2),
--   ('Frank', 2),
--   ('Grace', 3),
--   ('Henry', 3),
--   ('Ivy', 3),
--   ('Jack', 3),
--   ('Kara', 2),
--   ('Leo', 1);

-- -- Goods (5 base goods)
-- INSERT INTO goods (good_name, is_base_of) VALUES
--   ('Apple Pie', NULL),       -- id 1
--   ('Chocolate Chip Cookie', NULL), -- id 2
--   ('Sourdough Bread', NULL), -- id 3
--   ('Blueberry Muffin', NULL),-- id 4
--   ('Croissant', NULL);       -- id 5

-- -- Derived Goods (20 goods referencing the 5 bases)
-- INSERT INTO goods (good_name, is_base_of) VALUES
--   ('Cinnamon Apple Pie', 1),
--   ('Caramel Apple Pie', 1),
--   ('Mini Apple Pie', 1),
--   ('Glazed Apple Pie', 1),
--   ('Dutch Apple Pie', 1),

--   ('Double Chocolate Cookie', 2),
--   ('Peanut Butter Cookie', 2),
--   ('Oatmeal Raisin Cookie', 2),
--   ('White Chocolate Chip Cookie', 2),
--   ('Mint Chocolate Cookie', 2),

--   ('Whole Wheat Sourdough', 3),
--   ('Garlic Sourdough', 3),
--   ('Seeded Sourdough', 3),
--   ('Mini Sourdough Roll', 3),
--   ('Herb Sourdough Loaf', 3),

--   ('Mini Blueberry Muffin', 4),
--   ('Glazed Blueberry Muffin', 4),
--   ('Crumble Top Blueberry Muffin', 4),

--   ('Almond Croissant', 5),
--   ('Chocolate Croissant', 5);

-- Bakers ↔ Goods (3 goods per baker for a tidy demo set)
-- INSERT INTO bakers_goods (baker_id, good_id) VALUES
--   -- Bakery 1 (Bread-focused): Alice(1), Bob(2), Clara(3), Leo(12)
--   (1, 3),   -- Sourdough Bread
--   (1, 16),  -- Whole Wheat Sourdough
--   (1, 4),   -- Blueberry Muffin

--   (2, 17),  -- Garlic Sourdough
--   (2, 5),   -- Croissant
--   (2, 24),  -- Almond Croissant

--   (3, 18),  -- Seeded Sourdough
--   (3, 19),  -- Mini Sourdough Roll
--   (3, 25),  -- Chocolate Croissant

--   (12, 20), -- Herb Sourdough Loaf
--   (12, 21), -- Mini Blueberry Muffin
--   (12, 22), -- Glazed Blueberry Muffin

--   -- Bakery 2 (Cookies-focused): Daniel(4), Eva(5), Frank(6), Kara(11)
--   (4, 2),   -- Chocolate Chip Cookie
--   (4, 11),  -- Double Chocolate Cookie
--   (4, 13),  -- Oatmeal Raisin Cookie

--   (5, 12),  -- Peanut Butter Cookie
--   (5, 14),  -- White Chocolate Chip Cookie
--   (5, 4),   -- Blueberry Muffin

--   (6, 15),  -- Mint Chocolate Cookie
--   (6, 2),   -- Chocolate Chip Cookie
--   (6, 22),  -- Glazed Blueberry Muffin

--   (11, 11), -- Double Chocolate Cookie
--   (11, 12), -- Peanut Butter Cookie
--   (11, 23), -- Crumble Top Blueberry Muffin

--   -- Bakery 3 (Pies-focused): Grace(7), Henry(8), Ivy(9), Jack(10)
--   (7, 1),   -- Apple Pie
--   (7, 6),   -- Cinnamon Apple Pie
--   (7, 7),   -- Caramel Apple Pie

--   (8, 8),   -- Mini Apple Pie
--   (8, 9),   -- Glazed Apple Pie
--   (8, 10),  -- Dutch Apple Pie

--   (9, 1),   -- Apple Pie
--   (9, 24),  -- Almond Croissant
--   (9, 5),   -- Croissant

--   (10, 6),  -- Cinnamon Apple Pie
--   (10, 25), -- Chocolate Croissant
--   (10, 9);  -- Glazed Apple Pie

-- SELECT bakers.name FROM bakers
-- JOIN bakery ON bakers.bakery_id = bakery.id
-- WHERE bakery.name = 'Sunrise Bakes';


-- SELECT bakery.name, string_agg(bakers.name, ', ') AS join FROM bakery
-- JOIN bakers ON bakery.id = bakers.bakery_id
-- GROUP BY bakery.name;

-- base_product  | derivitives 
--     name      | string_agg

SELECT base_goods.good_name AS "Base",
string_agg(derivitive_goods.good_name, ', ') AS "Derivitives" 
FROM goods AS base_goods
JOIN goods AS derivitive_goods
ON base_goods.id = derivitive_goods.is_base_of
-- WHERE base_goods.is_base_of IS NULL 
GROUP BY base_goods.good_name;