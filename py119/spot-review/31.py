# Find the highest scoring word in a string.
# Each letter scores points based on its position in the alphabet: a = 1, b = 2, c = 3, ... z = 26.
# Return the highest scoring word. If two words score the same, return the word that appears earliest in the string.


def high(string):
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    scores = {char: ord(char) - 96 for char in alpha}
    string = string.split()
    results = []
    
    for word in string:
        curr_word = [word]

        for char in word:
            try:
                curr_word[1]
            except IndexError:
                curr_word.append(scores[char])
                continue

            curr_word[1] += scores[char]
        
        results.append(curr_word)

    def score(word):
        _, num = word
        return num
    
    sorted_results = sorted(results, key=score, reverse=True)

    return sorted_results[0][0]


print(high('man i need a taxi up to ubud') == 'taxi')
print(high('what time are we climbing up the volcano') == 'volcano')
print(high('take me to semynak') == 'semynak')
print(high('aaa b') == 'aaa')