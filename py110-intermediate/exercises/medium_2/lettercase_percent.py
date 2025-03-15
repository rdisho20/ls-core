import pprint

def letter_percentages(string):
    str_length = len(string)
    counts_to_percent = [0, 0, 0]
    result_dict = {
        'lowercase': 1,
        'uppercase': 1,
        'neither': 1,
    }
    result_keys = list(result_dict.keys())

    for char in string:
        if char.islower() and char.isalpha():
            counts_to_percent[0] += 1
        elif char.isupper() and char.isalpha():
            counts_to_percent[1] += 1
        else:
            counts_to_percent[2] += 1
    
    for idx in range(len(counts_to_percent)):
        counts_to_percent[idx] =  (counts_to_percent[idx] / str_length) * 100
        result_dict[result_keys[idx]] = f"{counts_to_percent[idx]:.2f}"
    
    return result_dict

pprint.pprint(letter_percentages('abCdef 123'))
pprint.pprint(letter_percentages('AbCd +Ef'))
pprint.pprint(letter_percentages('123'))

'''
expected_result = {
    'lowercase': "50.00",
    'uppercase': "10.00",
    'neither': "40.00",
}
print(letter_percentages('abCdef 123') == expected_result)

expected_result = {
    'lowercase': "37.50",
    'uppercase': "37.50",
    'neither': "25.00",
}
print(letter_percentages('AbCd +Ef') == expected_result)

expected_result = {
    'lowercase': "0.00",
    'uppercase': "0.00",
    'neither': "100.00",
}
print(letter_percentages('123') == expected_result)
'''