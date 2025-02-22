def swap(string):
    words_list = string.split()

    for idx in range(len(words_list)):
        word = list(words_list[idx])

        first = word[-1]
        last = word[0]

        word[0] = first
        word[-1] = last

        word = ''.join(word)
        words_list[idx] = word

    return ' '.join(words_list)

print(swap('Oh what a wonderful day it is') == "hO thaw a londerfuw yad ti si")  # True
print(swap('Abcde') == "ebcdA")            # True
print(swap('a') == "a")                    # True

'''LS Solution
# I like LS solution better as it's slightly more sophisticated

def swap(words):
    words_list = words.split()

    for idx in range(len(words_list)):
        words_list[idx] = swap_first_last_characters(words_list[idx])

    return ' '.join(words_list)

def swap_first_last_characters(word):
    if len(word) == 1:
        return word

    return word[-1] + word[1:-1] + word[0]

'''