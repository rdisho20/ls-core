'''
Write the expected output for each of the print statements, 
and explain why identity and equality behave differently in 
this example. Then modify the code to add a custom __hash__ 
method that makes Book objects usable as dictionary keys based 
on their content rather than identity.
'''

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author
    
    def __eq__(self, other):
        if not isinstance(other, Book):
            return NotImplemented
        return (self.title == other.title and
                self.author == other.author)
    
    # __hash__ method
    def __hash__(self):
        return f"'{self.title}', {self.author}"

# Test Cases
book1 = Book("The Great Gatsby", "F. Scott Fitzgerald")
book2 = Book("The Great Gatsby", "F. Scott Fitzgerald")
book3 = book1


print(book1 == book2)  # ???
print(book1 is book2)  # ???
print(book1 is book3)  # ???
print(hex(id(book1)))  # ???
print(hex(id(book2)))  # ???
print(hex(id(book3)))  # ???

'''
Expected Output:
print(book1 == book2)  # True
print(book1 is book2)  # False
print(book1 is book3)  # True
print(hex(id(book1)))  # hexidecimal ID hash for book1
print(hex(id(book2)))  # hexidecimal ID hash for book2
print(hex(id(book3)))  # hexidecimal ID hash for book3 (same as book1)

Explanation:

Identity and equality behave differently in this example 
because...
1) we have a __eq__ method defined for the class 
so that it can handle equality checks based on the method's 
return statement (checking if title and author are equal to 
the other).  This way when checking equality we don't up
calling the 'object' superclass __eq__ which checks if 
the identity of the objects are the same.
2) when checking book1 is book2 we do a simple id comparison 
with the 'is' operator, checking if the object is the same object 
as the other stored in memory.
'''