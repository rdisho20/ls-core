'''Write a generator function called `string_processor` that takes a list of strings
and processes them in stages:
1.  First yield: the original string
2.  Second yield: the string in uppercase
3.  Third yield: the length of the string
4.  Move to next string and repeat
Use lambda functions to create different processing variations.
Test the generator's behavior when partially consumed.
Test Cases:'''

strings = ['hello', 'world', 'python']

def string_processor(str_list):
    for string in str_list:
        yield string
        yield string.upper()
        yield len(string)

processor = string_processor(strings)

# First string processing
print(next(processor))        # 'hello'
print(next(processor))        # 'HELLO'
print(next(processor))        # 5

# Second string processing
print(next(processor))        # 'world'
print(next(processor))        # 'WORLD'
print(next(processor))        # 5

# Create a filtered version using lambda
vowel_strings = ['apple', 'orange', 'ice']
vowel_processor = string_processor(
    list(filter(lambda s: s[0].lower() in 'aeiou', vowel_strings))
)

# Should process 'apple', 'orange', 'ice'
results = list(vowel_processor)
print(results)
print(len(results))           # 9 (3 strings × 3 yields each)