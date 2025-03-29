ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

def panagram(string):
    alpha_count = {char: 0 for char in ALPHABET}
    
    for char in alpha_count.keys():
        if alpha_count[char] == 1:
            continue
        else:
            alpha_count[char] += 1
    
    return True if sum(alpha_count.values()) == 26 else False

print(panagram("The quick brown fox jumps over the lazy dog.")) # should return True
print(panagram("This is not a pangram.")) # should return False