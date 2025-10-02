-- SELECT name AS "Bid on Items" FROM items
-- WHERE id IN (
  -- SELECT item_id FROM bids
-- );

-- SELECT name FROM items
-- WHERE id NOT IN (
  -- SELECT item_id FROM bids
-- );

-- SELECT name, (
  -- SELECT count(item_id) FROM bids
  -- WHERE item_id = items.id
-- ) FROM items;

-- SELECT name FROM items
-- WHERE id = (
  -- SELECT item_id FROM bids
  -- GROUP BY item_id
  -- ORDER BY count(item_id) DESC
  -- LIMIT 1
-- );

/*
Problem 5
Difficulty​: Advanced
Problem Statement​:
Using EXISTS and a correlated subquery, write a query to select the names of all items that have at least one bid.Solution Criteria​:
The query should produce the following output:

      name
---------------
 Video Game
 Outdoor Grill
 Painting
 Tent
 Vase
(5 rows)

-- EXISTS effectively checks whether any rows at all are returned by the nested query.
*/

-- SELECT name FROM items AS i
-- WHERE EXISTS (
  -- SELECT item_id FROM bids AS b
  -- WHERE b.item_id = i.id
-- );

-- SELECT name FROM bidders AS b
-- WHERE EXISTS (
  -- SELECT bidder_id AS bi FROM bids
  -- WHERE b.id = bi.bidder_id
-- );

-- SELECT max(b.count) FROM (
  -- SELECT count(bidder_id) FROM bids
  -- GROUP BY bidder_id
-- ) AS b;

-- SELECT name, (
  -- SELECT count(item_id) FROM bids
  -- WHERE items.id = bids.item_id
-- ) FROM items;