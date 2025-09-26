-- Write a SQL query to find the total sales for each product category for the year 2023. 
-- The results should only include categories with total sales greater than $50,000. 
-- Order the results by total sales in descending order.


SELECT product_category, sum(sale_amount) AS total_sales
  FROM sales
 WHERE sale_date BETWEEN '2023-01-01' AND '2023-12-31'
 GROUP BY product_category
HAVING sum(sale_amount) > 50000
 ORDER BY sum(sale_amount) DESC;

/*
Regarding modality: -- From Vy's study session w/ Pete

    For a 1:1 relationship, both sides are required.
    For a 1:M relationship, look at the foreign key on the MANY side. 
      If it is NOT NULL, then the 1 side is required. Otherwise, the 1 side is optional. 
      The MANY side in both cases is optional.
    For a M:M relationship, look at the foreign keys in the join table. 
      If a key is NOT NULL, then the referenced table is required. 
      Otherwise, the referenced table is optional.
*/

/*
    natural key, surrogate key, composite key(?)
*/