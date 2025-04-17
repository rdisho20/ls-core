def binary_search(lst, search_term):
    count = 0

    while len(lst) >= 1:
        count += 1
        length = len(lst)
        middle = (length // 2) - 1

        print(lst[middle])

        if lst[middle] == search_term:
            print(f'index calc, middle {middle} => {(middle + 1) * (count * 2)}')
            return (middle + 1) * (count * 2)
        elif lst[middle] < search_term:
            lst = lst[middle + 1:]
        elif lst[middle] > search_term:
            lst = lst[:middle + 1]

        print(count)
    
    return -1

# Phone book data
phone_book = [
    'Embry',
    'Hanson',
    'Hawkins',
    'John',
    'Lee',
    'Seeli',
    'Smith',
    'Zimmer',
]

# print(binary_search(phone_book, 'John') == 3) # True

businesses = ['Apple Store', 'Bags Galore', 'Bike Store',
              'Donuts R Us', 'Eat a Lot', 'Good Food',
              'Pasta Place', 'Pizzeria', 'Tiki Lounge',
              'Zooper']
print(binary_search(businesses, 'Pizzeria') == 7)
# print(binary_search(businesses, 'Apple Store') == 0) # True

# print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 77) == -1) # True
print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 89) == 6)
# print(binary_search([1, 5, 7, 11, 23, 65, 89, 102], 5) == 1) # True

names = ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue',
         'Tyler']
# print(binary_search(names, 'Peter') == -1) # True
print(binary_search(names, 'Tyler') == 6)


'''
input: list and search item
output: index of search item if found, otherwise -1
rules: list argument is always sorted

Data structure: copy of input list

Algorithm (Much wisdom in iterative approach):
- Given a set of data and a search term,
- Determine the middle value, check if it is equal to the search term
-- Stop the search and return the index number IF it is
-- If the middle value is less than the search term (data sorted alphabetically)
--- discard the lower half, remove it from the list of data
-- IF the middle value is greater than search value, do vice versa - discard upper half
-- IF the base case is less than or equal to 1 and the value does not equal search term,
--- return -1
--- OTHERWISE, return the index of the middle element

****Low LVL:****
Step 1:
- While the length of the 'lst' is >= 1...
-- Determine the 'middle' value, check if 'lst[middle]' equal to 'search_term'
-- IF it is equal, return the 'middle'; index of 'search_term'

-- IF 'lst[middle]' < 'search_term'
--- set the 'lst' equal to 'lst[middle + 1:]' (discarding lower half); continue to next iteration

-- IF 'lst[middle]' > 'search_term'
--- set 'lst' = 'lst[:middle + 1]' (discarding upper half); continue to next iteration

Step 2:
- When length of lst is < 1, we've moved outside of loop
- return -1

'''