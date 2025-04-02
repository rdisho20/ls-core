# Write a function that finds all the anagrams of a word from a list.
# Two words are anagrams of each other if they both contain the same letters.

def anagrams(input, word_lst):
    char_count_lst = [{char: word.count(char) for char in word}
                      for word in word_lst]
    
    print(char_count_lst)

    result = []

    for idx, word in enumerate(word_lst):
        for char_idx, char in enumerate(input):
            if input.count(char) != char_count_lst[idx].get(char):
                break
            elif (char_idx + 1) == len(word):
                result.append(word) # reached end of current word in word_lst w/o breaking out => word is anagram
            else:
                continue
    
    return result

# Examples
# 'abba' & 'baab' == true
# 'abba' & 'bbaa' == true
# 'abba' & 'abbba' == false
# 'abba' & 'abca' == false

print(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) == ['aabb', 'bbaa'])
print(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) == ['carer', 'racer'])
print(anagrams('laser', ['lazing', 'lazy', 'lacer']) == [])