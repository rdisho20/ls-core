"""
You are given a list of dictionaries, where each dictionary contains information about a movie: its title, director, and a list of genres. Write a function that returns a new dictionary where the keys are genres and the values are lists of movie titles belonging to that genre. The movie titles within each genre list should be sorted alphabetically.

input
list of dictionaries
    keys - title, director, genre  as strings
    values - string, string, list of strings

Output
dictionary
    key - genres
    values - list of titles in genre

boundaries/assumptions
movie titles in output dictionary should be sorted alphabetically

test cases
below

d/s
dictionary comprehension, .setdefault(), helper function, loop,

algo - hl
loop over input list of dictionaries
loop over genres in dictionary
add genre to new dictionary as key
add new title as value

algo - ll
set movies_by_genre to an empty dictionary
loop over input list of movies
    loop over genres value (which is a list)
        add genre to movies_by_genre with a default value of an empty list
        append movie title to genre in movies_by_genre

return movies_by_genre

"""


def group_movies_by_genre(movies):
    movies_by_genre = {}
    for dictionary in movies:
        for genre in dictionary['genres']:
            movies_by_genre.setdefault(genre, []).append(dictionary['title'])
            # movies_by_genre[genre].append(dictionary['title'])
    
    return movies_by_genre


movies = [
    {
        'title': 'The Shawshank Redemption',
        'director': 'Frank Darabont',
        'genres': ['Drama']
    },
    {
        'title': 'The Godfather',
        'director': 'Francis Ford Coppola',
        'genres': ['Drama', 'Crime']
    },
    {
        'title': 'The Dark Knight',
        'director': 'Christopher Nolan',
        'genres': ['Action', 'Crime', 'Drama']
    },
    {
        'title': 'Pulp Fiction',
        'director': 'Quentin Tarantino',
        'genres': ['Crime', 'Drama']
    }
]


# Expected Output:
# {
#     'Drama': ['Pulp Fiction', 'The Dark Knight', 'The Godfather', 'The Shawshank Redemption'],
#     'Crime': ['Pulp Fiction', 'The Dark Knight', 'The Godfather'],
#     'Action': ['The Dark Knight']
# }

print(group_movies_by_genre(movies))