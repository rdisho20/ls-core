# Test case
def show_media_details(media_list):
    for item in media_list:
        print(item.display_info())

class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def display_info(self):
        print(f"{self.title} {self.author} {self.pages}")

class Movie:
    def __init__(self, title, director, minutes):
        self.title = title
        self.director = director
        self.minutes = minutes

    def display_info(self):
        print(f"{self.title} {self.director} {self.minutes}")

class Music:
    def __init__(self, title, band, minutes):
        self.title = title
        self.band = band
        self.minutes = minutes
    
    def display_info(self):
        print(f"{self.title} {self.band} {self.minutes}")



book = Book("The Hobbit", "J.R.R. Tolkien", 295)
movie = Movie("Inception", "Christopher Nolan", 148)
music = Music("Abbey Road", "The Beatles", 47)
media_collection = [book, movie, music]
show_media_details(media_collection)
# Should display appropriate information for each media type