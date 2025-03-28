'''Write a function that takes a list of words and constructs a new word by
concatenating the nth letter from each word, where n is the position of the
word in the list.'''
def nth_char(lst):
    result = ''
    for idx in range(len(lst)):
        result += lst[idx][idx]
    return result


print(nth_char(['yoda', 'best', 'has'])) # should return 'yes'