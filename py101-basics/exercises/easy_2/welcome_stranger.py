# given 2 arguments, a list & a dictionary, return full name and title
# define a function params (name_list, title_occu)
# - assign the list joined with ' ' to a variable 'person_name'
# - assign the dict joined with ' ' to a variable 'title'
# - return a string containing the two variables
def greetings(name_list, title_occu):
    return(f"Hello, {' '.join(name_list)}! Nice to have a "
    f"{' '.join(title_occu.values())} around.")

greeting = greetings(
    ["John", "Q", "Doe"],
    {"title": "Master", "occupation": "Plumber"},
)
print(greeting)