import random

def select_hex_range():
    randint = random.random()
    # numbers
    if randint < 0.5:
        return list(range(48, 58))
    # letters
    elif randint >= 0.5:
        return list(range(97, 103))

def generate_code():
    char_table = {
        'group1': [0, 0, 0, 0, 0, 0, 0, 0],
        'group2': [0, 0, 0, 0],
        'group3': [0, 0, 0, 0],
        'group4': [0, 0, 0, 0],
        'group5': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

    for value in char_table.values():
        for idx in range(len(value)):
            value[idx] = chr(random.choice(select_hex_range()))

    result = (
        f"{''.join(char_table['group1'])}-"
        f"{''.join(char_table['group2'])}-"
        f"{''.join(char_table['group3'])}-"
        f"{''.join(char_table['group4'])}-"
        f"{''.join(char_table['group5'])}"
    )

    return result

print(generate_code())

'''
Notes:

Consider how you might make finding random values simpler instead of 
adhering to original ideas of structure and retrieval methods

LS Solution (best)
import random

def generate_uuid():
    hex_chars = '0123456789abcdef'
    sections = [8, 4, 4, 4, 12]
    uuid = []

    for section in sections:
        chars = [random.choice(hex_chars) for _ in range(section)]
        uuid.append(''.join(chars))

    return '-'.join(uuid)
'''

