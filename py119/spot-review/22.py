# Write a function `scramble(str1, str2)` that returns `True` if a portion of
# `str1` characters can be rearranged to match `str2`, otherwise returns `False`.

#Notes:
# - Only lower case letters will be used (a-z). No punctuation or digits will
#	be included.
# - Performance needs to be considered.
# - Input strings `str1` and `str2` are null terminated.


def scramble(str1, str2):
    for char in str2:
        if char not in str1:
            return False
    
    return True

print(scramble('rkqodlw', 'world')) # should return True
print(scramble('cedewaraarossoqqyt', 'carrot')) # should return True
print(scramble('katas', 'steak')) # should return False
print(scramble('scriptjava', 'javascript')) # should return True
print(scramble('scriptingjava', 'javascript')) # should return True