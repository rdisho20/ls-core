# Create a function that converts a string into a "run-length encoding".
# Each sequence of identical characters should be replaced with the character
# followed by the count of consecutive occurrences. If a character appears
# only once, just include the character without a count.

'''
input: string
output: string; each sequence of identical characters
- followed by count of consecutive occurrences

E-rules:
only one character? just include character without count

Data Structure: string as-is

A-
Start w/ a count variable
Start w/ a result empty string

For every character in input string
    If it is first character
        concatinate character to result string
        continue to next iteration

    If the character is the same as the previous character
        Increment its count by 1

        If the character is at the last index in input string
            concatinate count to result string
            return the result string

    If it is not equal to previous character (new)
        If the count variable is not equal to 1
            concatinate the count variable string version to result string

        concatinate character to the result string
        and Set its count to 1


'aabcccccaaa'
a - 1 -> a
a - 2 -> a
b - 1 -> a2b
c - 1 -> a2bc
c - 2 -> ''
c - 3 -> ''
c - 4 -> ''
c - 5 -> ''
a - 1 -> a2bc5a
'', '' => return a2bc5a

'''

def run_length_encode(string):
    result = ''
    count = 1

    if not string:
        return ''

    for idx, char in enumerate(string):
        if idx == 0:
            result += char
            continue

        elif char == string[idx - 1]:
            count += 1

            if idx == len(string) - 1:
                result += str(count)
                return result
        
        elif char != string[idx - 1]:
            if count != 1:
                result += str(count)
            
            result += char
            count = 1

    return result

print(run_length_encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"))# == "W12BW12B3W24B")
print(run_length_encode("aabcccccaaa"))# == "a2bc5a3")
print(run_length_encode("abcdef"))# == "abcdef")
print(run_length_encode("") == "")
print(run_length_encode("aaaaaaaaaa"))# == "a10")

'''
J's algo

P-
input: string
output: new string with chars followed their number of consecutive occurrences. 

empty strings return empty strings
if no duplicate occurrences, just the string as is
if there are more than one run of the same char, include all runs of that char seperately

D-
counter variable
result string variable

A-
set counter variable to 1
set an empty string

iterate over the string start at index 1
check if current char is equal to previous character
if it is increment counter variable
if it is not
add the previous character 
and if current count is greater than 1
    add that count to the result string variable as well
    and reset the counter to 1

"aabcccccaaa"
----

def run_length_encode(string):
    counter = 1
    result_str = ''

    for idx in range(1, len(string)):
        char = string[idx]

        if char == string[idx - 1]:
            counter += 1

            if idx == len(string) - 1:
                result_str += string[idx - 1]

                if counter > 1:
                    result_str += str(counter)
                    counter = 1

        elif char != string[idx - 1]:
            result_str += string[idx - 1]

            if counter > 1:
                result_str += str(counter)
                counter = 1

            if idx == len(string) - 1:
                result_str += string[idx]

    return result_str
'''