# Write a function that takes a list of strings and groups anagrams together.

def get_dict(string): # for checking letter counts for anagram
    counts = {}

    for char in string.casefold().replace(" ", ""):
        counts[char] = counts.get(char, 0) + 1
    
    return counts

def group_anagrams(words):
    checked_set = set()
    current_lst = []
    result_lst = []
    
    for main_word in words:
        if main_word not in checked_set:
            checked_set.add(main_word)
            current_lst.append(main_word)
            main_word_counts = get_dict(main_word)
        else:
            continue

        for sub_word in words:
            if main_word == sub_word:
                continue

            sub_word_counts = get_dict(sub_word)

            if main_word_counts == sub_word_counts: # We have an anagram
                current_lst.append(sub_word)
                checked_set.add(sub_word) # checked so no need own exclusive For loop later
        
        result_lst.append(current_lst)
        current_lst = []
    
    return result_lst


print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# Output should be something like: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


'''
input: list of strings
output: nested list of strings organized w/ their anagrams

data structure: dictionaries

Algo:
Start w/ 'current_lst' (for building), 'result_lst' (for appending), 'check_set' (for checking)
Hgh Lvl:
- For each string in 'words'
-- Check if it is an anagram with the next word
-- If it is an anagram, add to their own list
- After Iterating, add list of anagrams to a result list
- repeat
- return result list 

Low Lvl:
start w/ " " "
For
- For each main_word in 'words'
-- IF not in 'checked_set', add, then append -> 'current_lst'
--- AND get 'get_dict' for 'main_word'

-- For each sub_word in 'words'
--- IF 'main_word' == 'sub_word' -> continue
--- 'get_dict' for 'sub_word'
--- IF 'main_word_count' == 'sub_word_count' WE HAVE AN ANAGRAM
---- append sub_word -> 'current_lst', add sub_word -> 'checked_set'

-- Outside inner loop = first iterations done
-- append 'current_list' -> 'result_lst'
-- reset 'current_lst'
- return 'result_lst'


'eat'
IF not in 'checked_set', add {eat} & append [eat]
IF YES, continue
'eat' -> 'tea' TRUE => ['eat', 'tea'] - appended? add{eat, tea}
'eat' -> 'tan' FALSE => ['eat', 'tea'] no chng
'eat' -> 'ate' TRUE => ['eat', 'tea', 'ate'] - appended? add {eat, tea, ate}
'eat' -> 'nat' FALSE => ['eat', 'tea', 'ate'] no chng
'eat' -> 'bat' FALSE => ['eat', 'tea', 'ate'] no chng
reset 'current_lst'

'tea'
IF not in 'checked_set', add
IF YES, continue

'tan'
IF not in 'checked_set', add {eat, tea, ate, tan}
IF YES, continue
'tan' -> 'eat' FALSE => 
'tan' -> 'tea' FALSE => 
'tan' -> 'ate' FALSE => 
'tan' -> 'nat' TRUE => ['tan', 'nat'] - appended? add {eat, tea, ate, tan}
'tan' -> 'bat' FALSE => 

'''