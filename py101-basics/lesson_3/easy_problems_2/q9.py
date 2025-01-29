ages = {'Herman': 32, 'Lily': 30, 'Grandpa': 5843, 'Eddie': 10}
additional_ages = {'Marilyn': 22, 'Spot': 277}

for key, value in additional_ages.items():
    ages[key] = value

print(ages)