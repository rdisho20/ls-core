# Given a list of words, group them by their character frequencies (not necessarily anagrams). 
# Words in the same group should have characters that appear with the same frequency.   

def group_by_char_frequency(words):
    char_freq = {}

    for word in words:
        signature = tuple(sorted(word))

        if signature not in char_freq:
            char_freq[signature] = [word]
        else:
            char_freq[signature].append(word)
        
    return list(char_freq.values())



print(group_by_char_frequency(["aab", "aba", "baa", "abc", "cba", "abb"]))
# Should output something like: [["aab", "aba", "baa"], ["abc", "cba"], ["abb"]]


'''
input: list of words
output: nested list of grouped words

rules:
exp:
- words in same group have chars appearing w/ same frequency
imp:
- no empty string element in input list
- strings word or single character pattern
- strings normalized, (lower case and no punctuation)

data structure: character frequency problem, so dictionary probably best

algorithm:
Starting w/ empty dictionary 'char_frequencies'

Hgh Lvl:
- For each word in input word list
-- sort the word
-- if character signature key exists add word
-- otherwise, add word as character signature key (immutable)
-- and add the word

finally, return a list of the dictionary values (groups)

Lower lvl:
Start w/ - empty dict 'char_frequencies'

step 1:
For word in 'words'
- sort 'word' and convert to tuple (immutable)
- IF 'tuple' not in 'dict.keys()':
-- dict[tuple] = [word] (list to append to later)
- ELSE
-- dict[tuple].append(word)

step 2:
return list(dict.values())

because been building out dictionary, just return list to get nested list


'aab' -> (aab) NOT in so add [aab]
'aba' -> (aab) append [aab, aba]
'baa' -> (aab) append [aab, aba, baa]
'abc' -> (abc) NOT in so add [abc]
'cba' -> (abc) append [abc, cba]
'abb' -> (abb) NOT in so add [abb]

return list(dict.values())

'''