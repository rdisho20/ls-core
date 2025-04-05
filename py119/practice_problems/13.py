def unscramble(str1, str2):
    for char in str2:
        if str2.count(char) > str1.count(char) or str1.count(char) == 0:
            return False
    
    return True


print(unscramble('ansucchlohlo', 'launchschool') == True)
print(unscramble('phyarunstole', 'pythonrules') == True)
print(unscramble('phyarunstola', 'pythonrules') == False)
print(unscramble('boldface', 'coal') == True)