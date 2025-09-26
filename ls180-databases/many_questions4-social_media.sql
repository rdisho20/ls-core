/*
You are asked to design the database schema for a simple social media app where users can follow each other. The core require is :
1. the system must store user info (name, email, etc)
2. each user can follow multiple other users
3. each user can be followed by many other users


describe the tables you would create to model this system. 

for each table  list the necessary columns, identify the primary key, and explain any foreign key relationshipos

how would you model the "follow" relationship between users?

be prepared to discuss relationships in terms of cardinality and modality 
*/

/*
users (id, name)
emails (id, user_id)
addresses (id, user_id)
followers (
  id, 
  user_id NOT NULLREFERENCES users (id) ON DELETE CASCADE, 
  follwers_user_id NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  UNIQUE (user_id, follower_user_id),
  CHECK (user_id <> follower_user_id)
)
following (
  id, 
  user_id NOT NULL REFERENCES users (id) ON DELETE CASCADE, 
  following_user_id NOT NULL REFERENCES users (id) ON DELETE CASCADE,
  UNIQUE (user_id, following_user_id),
  CHECK (user_id <> following_user_id)
)
*/