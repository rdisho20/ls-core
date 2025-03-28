'''
Write a function that takes a string as input and counts the occurrences of each
lowercase letter in the string. Return the counts in a dictionary where the
letters are keys and their counts are values.
'''
def letter_count(string):
    result = {}
    for char in string:
        if not result.get(char):
            result[char] = 1
        else:
            result[char] += 1
    return result


print(letter_count('launchschool'))