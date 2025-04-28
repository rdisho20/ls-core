def binary_search(data, search):
    data_copy = data.copy()

    while len(data_copy) >= 1:
        middle_idx = (len(data_copy) // 2) - 1
        middle = data_copy[middle_idx]

        if middle == search:
            return data.index(search)

        elif middle < search:
            if len(data_copy) == 1:
                return -1

            data_copy = data_copy[middle_idx + 1:]

        elif middle > search:
            if len(data_copy) == 1:
                return -1

            data_copy = data_copy[:middle_idx]
    
    return -1


# All of these examples should print True
businesses = ['Apple Store', 'Bags Galore', 'Bike Store',
              'Donuts R Us', 'Eat a Lot', 'Good Food',
              'Pasta Place', 'Pizzeria', 'Tiki Lounge',
              'Zooper']
print(binary_search(businesses, 'Pizzeria') == 7)
print(binary_search(businesses, 'Apple Store') == 0)

print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 77) == -1)
print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 89) == 6)
print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 5) == 1)

names = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue',
         'Tyler']
print(binary_search(names, 'Peter') == -1)
print(binary_search(names, 'Tyler') == 6)


'''
input: list and search item
output: index of search item if found, otherwise -1
rules: list argument is always SORTED

Data structure: copy of input list

Algorithm:
High Lvl:
- Given a list and a search term
- Each iteration, check what the middle value of the list is
- IF MIDDLE value == the search term, return the index at which point that term appears in OG list
- IF index at which point the search term appears is LOWER than the MIDDLE index value
-- discard all items in top half of range
- OTHERWISE (HIGHER than MIDDLE)
-- discard all items in low half of range

- IF search term is not found (list length is == 1 @ end of search)
- return -1

LOW Level:
start w/ copy of data, 'data_copy'
and WHILE len(data_copy) >= 1

Step 1:
- assign 'middle_idx' => (length of 'data_copy' // 2) - 1
- assign 'middle' -> word @ 'middle_idx'

Step 2:
- if 'middle' == search term, return index position of 'middle' in OG list (exits funciton)
- elif 'middle' < search term (ASCII):
-- assign 'data_copy' sliced data_copy[middle_idx + 1:]
- elif 'middle' > search term:
-- assign 'data_copy' sliced data_copy[:middle_idx]

Step 3:
return -1


['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
search = 'Tyler'

1st - data copy
'kim', != search, remove [alice, bonnie, kim]
2nd - data copy [pete, rachel, sue, tyler]
'rachel', != search, remove [pete, rachel]
3rd - [sue, tyler]
remove sue
4th - [tyler]
'tyler' == search => return data.index('search') => 6

[1, 5, 7, 11, 23, 65, 89, 102]
search = 77

1st - data copy
11, != search, remove [1, 5, 7, 11] => data_copy[middle_idx + 1:]
2nd - [23, 65, 89, 102]
65, != search, remove [23, 65]
3rd - [89, 102]
89, != search, remove [89]
4th - [102]
102, != search, remove [102]
5th - [] -> loop doesn't run -> return -1

DEBUG
['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
search = Peter
1st
kim != search, [alice, bonnie, kim] => dc[middle_idx + 1:]
2nd - [pete, rachel, sue, tyler]
rahcel != search, [rachel, sue, tyler] => dc[:middle_idx]
3rd - [pete]
pete != search, [pete] => dc[middle_idx + 1:]

DEBUG
[1, 5, 7, 11, 23, 65, 89, 102]
search = 77

1st - data copy
11, < search, remove [1, 5, 7, 11] => data_copy[middle_idx + 1:]
2nd - [23, 65, 89, 102]
65 < search, remove [23, 65] => data_copy[middle_idx + 1:]
3rd - [89, 102]
89 > search, remove [23, 65]...

'''