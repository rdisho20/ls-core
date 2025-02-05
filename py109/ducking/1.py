# given a string, return a new string with all the values removed
# define a function that takes a string
# list function passing in string given new variable name

# - in the function for every character of the string
#   check if the character is a vowel or not accounting for lwr and uppr case
# - if the character is either a-e-i-o-u, remove that character from the string

# - join elements in the string list by an empty string, giving us original formatting


def remove_vowels(string):
    list_string = list(string)
    result = []

    for idx in range(len(list_string)):
        match list_string[idx]:
            case 'a' | 'A':
                continue
            case 'e' | 'E':
                continue
            case 'i' | 'I':
                continue
            case 'o' | 'O':
                continue
            case 'u' | 'U':
                continue
            case _:
                result.append(list_string[idx])

    return ''.join(result)

my_string = "Hello World"

print(remove_vowels(my_string))