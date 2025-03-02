def staggered_case(string):
    new_str = ''

    for idx in range(len(string)):
        if idx % 2 == 0:
            new_str += string[idx].upper()
        elif idx % 2 == 1:
            new_str += string[idx].lower()
    
    return new_str

string = 'I Love Launch School!'
result = "I LoVe lAuNcH ScHoOl!"
print(staggered_case(string) == result)  # True

string = 'ALL_CAPS'
result = "AlL_CaPs"
print(staggered_case(string) == result)  # True

string = 'ignore 77 the 4444 numbers'
result = "IgNoRe 77 ThE 4444 nUmBeRs"
print(staggered_case(string) == result)  # True

print(staggered_case('') == "")          # True