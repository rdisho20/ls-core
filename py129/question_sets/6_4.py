class Author:
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def __str__(self):
        return self.name

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
        # each time book initialized, added to author database
        self.author.books.append(self)
    
    def __str__(self):
        return f"'{self.title}' by {self.author}"
    
    def __repr__(self):
        return f"Book('{self.title}', {self.author})"

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def find_books_by_author(self, author_name):
        books_found = [book for book in self.books
                       if book.author.name == author_name]
        return books_found

    def __str__(self):
        return f"{self.name}'s number of books: {len(self.books)}"


# Test code
author1 = Author("Jane Austen")
author2 = Author("George Orwell")

book1 = Book("Pride and Prejudice", author1)
book2 = Book("1984", author2)
book3 = Book("Animal Farm", author2)
book4 = Book("Emma", author1)

library = Library("City Library")
library.add_book(book1)
library.add_book(book2)
library.add_book(book3)
library.add_book(book4)

print(library)
print(author1.books)  # Should show books by Jane Austen
print(author2.books)  # Should show books by George Orwell
print(library.find_books_by_author("George Orwell"))  # Should return [book2, book3]