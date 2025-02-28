munsters = {
    'Herman':  {'age': 32,  'gender': 'male'},
    'Lily':    {'age': 30,  'gender': 'female'},
    'Grandpa': {'age': 402, 'gender': 'male'},
    'Eddie':   {'age': 10,  'gender': 'male'},
    'Marilyn': {'age': 23,  'gender': 'female'},
}

ages = []
for name, info in munsters.items():
    if info['gender'] in 'male':
        ages.append(info['age'])

print(sum(ages))

ages_comp = [info['age'] for name, info in munsters.items()
             if info['gender'] in 'male']
print(sum(ages_comp))