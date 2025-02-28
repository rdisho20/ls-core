import pprint

books = [
    {
        'title': 'One Hundred Years of Solitude',
        'author': 'Gabriel Garcia Marquez',
        'published': '1967',
    },
    {
        'title': 'The Book of Kells',
        'author': 'Multiple Authors',
        'published': '800',
    },
    {
        'title': 'War and Peace',
        'author': 'Leo Tolstoy',
        'published': '1869',
    },
]

def sort_by_year(collection):
    title, author, published = collection.values()
    
    return (int(published), title, author)

pprint.pprint(sorted(books, key=sort_by_year))

'''LS Solution
# Don't need to unpack entire dictionary

def get_published_year(book):
    return int(book['published'])

sorted_books = sorted(books, key=get_published_year)
print(sorted_books)
'''