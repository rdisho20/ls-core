def word_sizes(string):
    words_list = string.split()
    words_count_dict = {}

    for word in words_list:
        word_length = 0

        for char in word:
            if char.isalpha():
                word_length += 1

        words_count_dict.setdefault(word_length, 0)
        words_count_dict[word_length] += 1

    return words_count_dict

# All of these examples should print True

string = 'Four score and seven.'
print(word_sizes(string) == {4: 1, 5: 2, 3: 1})

string = 'Hey diddle diddle, the cat and the fiddle!'
print(word_sizes(string) == {3: 5, 6: 3})

string = 'Humpty Dumpty sat on a w@ll'
print(word_sizes(string) == {6: 2, 3: 2, 2: 1, 1: 1})

string = "What's up doc?"
print(word_sizes(string) == {5: 1, 2: 1, 3: 1})

print(word_sizes('') == {})