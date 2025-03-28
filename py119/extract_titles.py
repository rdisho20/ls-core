# dict, dict, list w/ dicts

def extract_book_titles(library):
    books_after_2000 = []

    for _, genre in library.items():

        for genre, books in genre.items():

            for book in books:

                author_split = book['author'].split()

                if author_split[-1].startswith('S') and book['year'] > 2000:
                    books_after_2000.append(book['title'])
    
    return books_after_2000


library = {
   'fiction': {
       'fantasy': [
           {'title': 'The Hobbit', 'author': 'J.R.R. Tolkien', 'year': 1937},
           {'title': 'A Game of Thrones', 'author': 'George R.R. Martin', 'year': 1996},
           {'title': 'The Way of Kings', 'author': 'Brandon Sanderson', 'year': 2010}
       ],
       'science_fiction': [
           {'title': 'Dune', 'author': 'Frank Herbert', 'year': 1965},
           {'title': 'Hyperion', 'author': 'Dan Simmons', 'year': 1989},
           {'title': 'Old Man\'s War', 'author': 'John Scalzi', 'year': 2005}
       ]
   },
   'non_fiction': {
       'science': [
           {'title': 'A Brief History of Time', 'author': 'Stephen Hawking', 'year': 1988},
           {'title': 'The Elegant Universe', 'author': 'Brian Greene', 'year': 1999},
           {'title': 'The Gene', 'author': 'Siddhartha Mukherjee', 'year': 2016}
       ],
       'history': [
           {'title': 'Sapiens', 'author': 'Yuval Noah Harari', 'year': 2011},
           {'title': 'The Wright Brothers', 'author': 'David McCullough', 'year': 2015},
           {'title': '1776', 'author': 'David McCullough', 'year': 2005}
       ]
   }
}


print(extract_book_titles(library))