'''
Write a function that generates text following a pattern where:
1) the first and last characters of each word remain in their original place
2) characters between the first and last characters are sorted alphabetically
3) punctuation should remain at the same place as it started
'''
def scramble_words(string):
    words_list = string.split()
    scramble_list = []

    for word in words_list:
        chars = list(word)
        print(f"chars[-1] is --> {chars[-1]}")
        last_idx = -2 if not chars[-1].isalpha() else -1

        chars = chars[0:1] + sorted(chars[1:last_idx]) + chars[last_idx:]

        scramble_list.append(''.join(chars))
    
    return ' '.join(scramble_list)


print(scramble_words('professionals')) # should return 'paefilnoorsss'

print(scramble_words("you've gotta dance like there's nobody watching, "
               "love like you'll never be hurt, sing like there's "
               "nobody listening, and live like it's heaven on earth."))
# should return "you've gotta dacne like teehr's nbdooy wachintg, 
# love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, 
# and live like it's haeevn on earth."
