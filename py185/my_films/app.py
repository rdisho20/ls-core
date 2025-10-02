import psycopg2
from psycopg2 import extras

connection = psycopg2.connect(dbname='films')

try:
    with connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute("SELECT * FROM directors")
            rows = cursor.fetchall()

finally:
    connection.close()

for row in rows:
    print(row['name'])

print()

connection = psycopg2.connect(dbname='films')

try:
    with connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute("""
                SELECT * FROM films
                JOIN directors
                ON films.director_id = directors.id
                WHERE name = 'Sidney Lumet'
            """)
            rows = cursor.fetchall()
finally:
    connection.close()

for row in rows:
    print(row['title'])

print()

connection = psycopg2.connect(dbname='films')

try:
    with connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute("""
                SELECT * FROM films
                WHERE director_id = 3
                ORDER BY id DESC
            """)
            films = cursor.fetchall()
finally:
    connection.close()

print(films[1]['duration'])

print()

connection = psycopg2.connect(dbname='films')

try:
    with connection:
        with connection.cursor(cursor_factory=extras.DictCursor) as cursor:
            cursor.execute("""
                SELECT genre, count(id) FROM films
                WHERE duration < 110
                GROUP BY genre
            """)
            rows = cursor.fetchall()
finally:
    connection.close()

for row in rows:
    print(f"Genre: {row['genre']} || No. of Films: {row['count']}")