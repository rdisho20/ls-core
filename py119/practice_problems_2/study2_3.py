# Create a function that converts a string into a "run-length encoding".
# Each sequence of identical characters should be replaced with the character
# followed by the count of consecutive occurrences. If a character appears
# only once, just include the character without a count.

def run_length_encode(string):
    if not string:
        return ""

    counts = {}

    for idx, char in enumerate(string):
        if counts.get(char, []):
            if char == string[idx - 1]:
                counts[char][-1] += 1
            
            elif char != string[idx - 1]:
                counts[char].append(1)
        
        else:
            counts[char] = [1]
    
    result = []

    for key, value in counts.items():
        if key not in result:
            result.append(key)

            if value[0] > 1:
                result.append(str(value[0]))
        
        elif key in result:
            if result[-1].isalpha() and result[-1] != key:
                result.append(str(value[result.counts(key)]))

            elif result[-2].isalpha() and result[-2] != key:
                result.append(str(value[result.counts(key)]))
    
    print(result)
    #return ''.join(result)

print(run_length_encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"))# == "W12BW12B3W24B")
print(run_length_encode("aabcccccaaa"))# == "a2bc5a3")
#print(run_length_encode("abcdef"))# == "abcdef")
#print(run_length_encode("") == "")
#print(run_length_encode("aaaaaaaaaa"))# == "a10")


'''
input: string
output: string,

data structure: dictionary

Algo:
Hgh lvl:
start w/ empty dict -> char counts

For each 'char' in input string
- If it is IN the dictionary, CHECK if the previous 'char'
- is equal to the current 'char'
-- IF EQUAL increment the LAST element in values list by 1
-- IF NOT EQUAL, APPEND new value of 1 to values list
- If it is NOT IN the dictionary, add to dictionary with values list [1]

For each key and value in dictionary:
- IF key NOT in 'result' list:
-- append key -> 'result'
-- IF value[0] > 1:
--- then append value[0] converted -> string to 'result'
- IF key IN 'result' list:
-- IF result[idx - 1].isalpha() and result[idx - 1] != key:
# prev char is not key and count was only 1 we need to go further into values list to get appropriate value
--- append element 'idx' of value list 'counts[key][idx]' where 'idx' is result.counts(key)
-- ELIF result[idx - 2].isalpha() and result[idx - 2] != key:
# prev char is not key and count wwas greater than 1 we need to go further into values list to get appropriate value
--- append element 'idx' of value list 'counts[key][idx] where 'idx' is result.counts(key)

- return ''.join(result) !!!!

Hgh Lvl:
- Start w/ empty dictionary -> char counts
- start w/ empty string 'result'

'letter_count' = 0
- For each element in dictionary,
-- IF value[letter_count] == 1: just concat key
-- IF value[letter_count] > 1:
--- append the key then it's count -> 'result
-- increment 'letter_count' <--- this handles if there is the letter later in string

return result

'aabcccccaaa'

'''