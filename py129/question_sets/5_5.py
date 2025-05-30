class Media:
    def __init__(self, title, available=True):
        self._title = title
        self._available = self.set_availability(available)

    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, title):
        if not isinstance(title, str):
            raise TypeError(f"{title} is 'int'; Invalid data type")
        if title == "":
            raise ValueError("Title must not be empty")
        
        self._title = title
    
    @property
    def available(self):
        return self._available
    
    def set_availability(self, available):
        if not isinstance(available, bool):
            raise TypeError("Not of 'bool' type")
        
        return available
    
    def checkout(self):
        self._available = False

    def return_item(self):
        self._available = True
    
class Book(Media):
    def __init__(self, title, available, author):
        super().__init__(title, available)
        self._author = author

    @property
    def author(self):
        return self._author
    
    @author.setter
    def author(self, author):
        if not isinstance(author, str):
            raise TypeError("Invalid data type")
        if author == "":
            raise ValueError("Author must not be empty")
        
        self._author = author

class DVD(Media):
    def __init__(self, title, available, director):
        super().__init__(title, available)
        self._director = director

    @property
    def director(self):
        return self._director
    
    @director.setter
    def director(self, director):
        if not isinstance(director, str):
            raise TypeError("Invalid data type")
        if director == "":
            raise ValueError("Director must not be empty")
        
        self._director = director

class Magazine(Media):
    def __init__(self, title, available, publisher):
        super().__init__(title, available)
        self._publisher = publisher

    @property
    def publisher(self):
        return self._publisher
    
    @publisher.setter
    def publisher(self, publisher):
        if not isinstance(publisher, str):
            raise TypeError("Invalid data type")
        if publisher == "":
            raise ValueError("Publisher must not be empty")
        
        self._publisher = publisher

book = Book("1984", True, "George Orwell")
dvd = DVD("Dodgeball", True, "Ben Stiller")
magazine = Magazine("Nintendo Power Issue #2", True, "Nintendo")

print(book.available)
print(dvd.available)
print(magazine.available)

dvd.checkout()
magazine.checkout()

print(book.available)
print(dvd.available)
print(magazine.available)

dvd.return_item()
magazine.return_item()

print(dvd.available)
print(magazine.available)

book.title = "Animal Farm"
print(book.title)

# Exceptions
#dvd2 = DVD("Arrested Development", 123, "I don't know")
#dvd.title = ""
#dvd.title = 123
#magazine.publisher = [1, 2, 3]