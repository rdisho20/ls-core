def print_occurrences(occurrences):
    for item, count in occurrences.items():
        print(f"{item} => {count}")

def count_occurrences(elements):
    elements_lowered = [item.casefold() for item in elements]
    occurrences = {}

    for item in elements_lowered:
        occurrences[item] = occurrences.get(item, 0) + 1

    print_occurrences(occurrences)

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
            'motorcycle', 'motorcycle', 'car', 'truck', 'suv']

count_occurrences(vehicles)