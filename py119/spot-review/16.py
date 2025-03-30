def spin_words(string):
    split_string = string.split(' ')
    result = []

    for word in split_string:
        if len(word) >= 5:
            result.append(word[-1::-1])
        else:
            result.append(word)
        
    return ' '.join(result)
            


print(spin_words("Hey fellow warriors")) # should return "Hey wollef sroirraw"
print(spin_words("This is a test")) # should return "This is a test"
print(spin_words("This is another test")) # should return "This is rehtona test"