#Write a function that takes a string as an argument and groups the
#number of times each character appears in the string as a dictionary
#sorted by the highest number of occurrences.

#The characters should be sorted alphabetically, and you should ignore
#spaces, special characters, and count uppercase letters as lowercase ones.

def get_char_count(string):
    count_dict = {}
    char_list = list(string.casefold())

    for char in char_list:
        if not char.isalnum():
            continue

        char_count = char_list.count(char)

        if count_dict.get(char_count) == None:
            count_dict[char_count] = []
    
        count_list = count_dict[char_count]

        if char not in count_list:
            count_list.append(char)

    for key, value in count_dict.items():
        count_dict[key] = sorted(value)

    final_dict = dict(sorted(count_dict.items(), reverse=True))

    return final_dict




print(get_char_count("Mississippi")) # should return {4: ['i', 's'], 2: ['p'], 1: ['m']}
print(get_char_count("Hello. Hello? HELLO!!")) # should return {6: ['l'], 3: ['e', 'h', 'o']}
print(get_char_count("aaa...bb...c!")) # should return {3: ['a'], 2: ['b'], 1: ['c']}
print(get_char_count("aaabbbccc")) # should return {3: ['a', 'b', 'c']}
print(get_char_count("abc123")) # should return {1: ['1', '2', '3', 'a', 'b', 'c']}