class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn

class Author:
    def __init__(self, name, books):
        self.name = name
        self.books = books

class Library:
    def __init__(self):
        self._books = []

    def add_book(self, book):
        self._books.append(book)

    def find_books_by_author(self, author_name):
        found_books = []

        for book in self._books:
            if author_name == book.author:
                found_books.append(book)
        
        return found_books

    def checkout_book(self, isbn):
        for idx, book in enumerate(self._books):
            if isbn == book.isbn:
                return self._books.pop(idx)

    def return_book(self, book):
        self._books.append(book)

    @property
    def books(self):
        return self._books

# Create some books and a library
book1 = Book("The Hobbit", "J.R.R. Tolkien", "9780261102217")
book2 = Book("The Fellowship of the Ring", "J.R.R. Tolkien", "9780261102354")
book3 = Book("Python Crash Course", "Eric Matthes", "9781593279288")

library = Library()
library.add_book(book1)
library.add_book(book2)
library.add_book(book3)

print(library.books)

# Find books by author
tolkien_books = library.find_books_by_author("J.R.R. Tolkien")
print(len(tolkien_books))  # Should be 2


# Checkout and return books
checked_out_book = library.checkout_book("9780261102217")
print(checked_out_book.title)  # The Hobbit

# After checkout, the book should no longer be in the library
remaining_tolkien_books = library.find_books_by_author("J.R.R. Tolkien")
print(len(remaining_tolkien_books))  # Should be 1

# Return the book
library.return_book(checked_out_book)
tolkien_books_after_return = library.find_books_by_author("J.R.R. Tolkien")
print(len(tolkien_books_after_return))  # Should be 2 again
