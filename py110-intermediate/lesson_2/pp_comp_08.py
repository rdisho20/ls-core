# colors :: fruits (capitalized) -- sizes :: veggies (uppercase)
dict1 = {
    'grape': {
        'type': 'fruit',
        'colors': ['red', 'green'],
        'size': 'small',
    },
    'carrot': {
        'type': 'vegetable',
        'colors': ['orange'],
        'size': 'medium',
    },
    'apricot': {
        'type': 'fruit',
        'colors': ['orange'],
        'size': 'medium',
    },
    'marrow': {
        'type': 'vegetable',
        'colors': ['green'],
        'size': 'large',
    },
}

new_lst = [[color.capitalize() for color in elem['colors']]
           if elem['type'] == 'fruit' else elem['size'].upper()
           for elem in dict1.values()]   # for value in elem.values(); don't need cuz will exponentiate output
           # if elem['size'] or elem['color']] <------ redundant, because they are always true

print(new_lst)

'''
def get_fruit_info(dictionary):
    new_lst = [{key: value} for nested_dict in dictionary.values()
               for key, value in nested_dict.items()
               if key == 'color' and value == 'fruit']
    return new_lst
'''

'''
def get_info(dct):
    result_lst = []

    for nested_dict in dct.values():
        if 'fruit' in nested_dict.values():
            result_lst.append(nested_dict)
        elif 'vegetable' in nested_dict.values():
            result_lst.append(nested_dict)
    
    return result_lst

new_lst = [value.upper() if key == 'vegetable'
           value.capitalize() elif key == 'fruit'
           for elem in get_info(dct) for key, value in elem
           if value == 'size' or value == 'color']
'''