def is_anagram(str1, str2):
    str1 = str1.casefold()
    str2 = str2.casefold()
    str1_dict = {}
    str2_dict = {}

    for char in str1:
        str1_dict[char] = str1_dict.get(char, 0) + 1
    
    for char in str2:
        str2_dict[char] = str2_dict.get(char, 0) + 1
    
    return set(str1_dict.items()) == set(str2_dict.items())

print(is_anagram('Creative', 'Reactive') == True)
print(is_anagram("foefet", "toffee") == True)
print(is_anagram("Buckethead", "DeathCubeK") == True)
print(is_anagram("Twoo", "WooT") == True)
print(is_anagram("dumble", "bumble") == False)