def most_common_char(string):
    normalized_str = string.casefold()
    string_dict = {char: normalized_str.count(char) for char in normalized_str}
    
    characters = list(string_dict.keys())
    char_counts = list(string_dict.values())
    maximum = max(char_counts)
    index = char_counts.index(maximum)

    return characters[index]



print(most_common_char('Hello World') == 'l')
print(most_common_char('Mississippi') == 'i')
print(most_common_char('Happy birthday!') == 'h')
print(most_common_char('aaaaaAAAA') == 'a')

my_str = 'Peter Piper picked a peck of pickled peppers.'
print(most_common_char(my_str) == 'p')

my_str = 'Peter Piper repicked a peck of repickled peppers. He did!'
print(most_common_char(my_str) == 'e')