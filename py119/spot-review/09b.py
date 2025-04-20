#Write a function that generates text following a pattern where:
#1) the first and last characters of each word remain in their original place
#2) characters between the first and last characters are sorted alphabetically
#3) punctuation should remain at the same place as it started

def scramble_words(string):
    char_lst = list(string)

    while True:
        swapped = False

        for idx in range(2, len(char_lst) - 1):
            if not char_lst[idx].isalpha():
                continue

            if not char_lst[idx - 1].isalpha():
                if char_lst[idx - 2] > char_lst[idx]:
                    char_lst[idx - 2], char_lst[idx] = char_lst[idx], char_lst[idx - 2]
                    swapped = True

            elif char_lst[idx - 1] > char_lst[idx]:
                char_lst[idx - 1], char_lst[idx] = char_lst[idx], char_lst[idx - 1]
                swapped = True
            
        if not swapped:
            break
    
    return ''.join(char_lst)

print(scramble_words('professionals')) # should return 'paefilnoorsss'
print(scramble_words("you'll")) 
print(scramble_words("watching,")) 
print(scramble_words("there's")) 
print(scramble_words("you've")) 


'''
you've
u - ou
' - u'
v - 'v - uv



'''

'''
print(scramble_words("you've gotta dance like there's nobody watching, "
               "love like you'll never be hurt, sing like there's "
               "nobody listening, and live like it's heaven on earth."))
# should return "you've gotta dacne like teehr's nbdooy wachintg, 
# love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, 
# and live like it's haeevn on earth."'''

'''
input: string
output: single string

rules:
exp:
- first and last chars of each word remain in og place
- characters between first and last sorted alphabetically
- punctuation doesn't change places
imp:
- input can be single word OR sentence w/ punctuation like (, or .)

data structure: list, input string split into a list, or multiple lists if multiple words (maybe)

Algorithm:
High Lvl:
- Given a string, if no white space, we have single word - extract single word to a list
- If there is white space, presumably we have a complete sentence and will treat it differently
-- Split sentence into words, ignoring the ',' and '.' punctuation

- For each 'word' in 'sentence' - for range of characters between first and last
-- sort alphabetically, punctuation doesn't change
-- replace each old word with it's new word, then join words together making new output string
--- <<need to treat punctuation as part of the nearest word in order to not lose it in the process>>

Low Lvl:
if string has white space:
- start w/ input string split into a list, no white characters, then each word split into character list

Step 1 - move to own function 'sort_word':
- If there is no whitespace (then we have 1 word) -> split into 'char_lst'
- While True:
-- swapped = False

-- for each 'idx' in range(1, len(char_lst) - 2) (only checking characters between first and last)
--- `````````````````````````````````````^^^^accounting for bubble sort, last char
--- IF 'char_lst[idx]' is not alphabetical: continue to next iteration
--- IF 'char_lst[idx + 1]' is not alphabetical: SKIP OVER PUNCTUATION
---- if char_lst[idx] >= char_lst[idx + 2]:
----- char_lst[idx], char_lst[idx + 2] = char_lst[idx + 2], char_lst[idx]
----- swapped = True

--- ELIF char_lst[idx] >= char_lst[idx + 1]:
---- char_lst[idx], char_lst[idx + 1] = char_lst[idx + 1], char_lst[idx]
---- swapped = True

-- IF not swapped => break out of While loop

Step 2:
Then return ''.join(char_lst) turning list into string

bubble sort
'''
