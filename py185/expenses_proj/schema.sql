DROP TABLE expenses;

CREATE TABLE expenses (
    id serial PRIMARY KEY,
    amount numeric(6, 2) NOT NULL,
    memo varchar(250) NOT NULL,
    created_on date NOT NULL
);

ALTER TABLE expenses
ADD CONSTRAINT positive_amount CHECK (amount >= 0);