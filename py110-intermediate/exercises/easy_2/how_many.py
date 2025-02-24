def count_occurrences(lst):
    set_list = set(lst)

    for elem in set_list:
        print(f"{elem} => {lst.count(elem)}")

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
            'motorcycle', 'motorcycle', 'car', 'truck', 'suv']

count_occurrences(vehicles)