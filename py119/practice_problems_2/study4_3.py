# Create a function that takes a list of strings as an argument and returns a list of lists, 
# where each sublist contains words from the original list that are anagrams of each other. 
# Words that have no anagrams in the list should be omitted from the result.  

def group_anagrams(lst):
    pass  

print(group_anagrams(['listen', 'silent', 'enlist', 'hello', 'world']) == 
        [['listen', 'silent', 'enlist']])
        
print(group_anagrams(['act', 'cat', 'dog', 'god', 'tac', 'fish']) == 
        [['act', 'cat', 'tac'], ['dog', 'god']])
        
print(group_anagrams(['python', 'ruby', 'javascript']) == [])

words = ['race', 'care', 'acre', 'stain', 'saint', 'train', 'coding']
print(group_anagrams(words) == [['race', 'care', 'acre'], ['stain', 'saint']])



'''
def group_anagrams(lst):
    anagrams = {}

    for word in lst:
        key = ''.join(sorted(word))
        
        if key in anagrams:
            anagrams[key].append(word)
        else:
            anagrams.setdefault(key, [word])
        
    return list(anagrams.values())


# Examples:
print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) == [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
print(group_anagrams(["listen", "silent", "enlist", "hello", "world"]) == [["listen", "silent", "enlist"], ["hello"], ["world"]])
print(group_anagrams([]) == [])

'''