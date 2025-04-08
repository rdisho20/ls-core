# Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
# Your task is to process a string with "#" symbols and return the final state of the string.

def clean_string(string):
    result = []

    for char in string:
        if char == "#":
            try:
                result.pop()
            except IndexError:
                continue
        else:
            result.append(char)
        
    return ''.join(result)

print(clean_string('abc#d##c') == "ac")
print(clean_string('abc####d##c#') == "")