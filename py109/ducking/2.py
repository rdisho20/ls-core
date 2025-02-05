# Given a list of numbers, return a new list with only even numbers, descending order
# define a function takes a list of numbers, 'descending_even_numbers'
# define new variable 'reversed_list' equal to sliced og number list [::-1]
# define a for loop looping through each position in 'reversed_list'
# - if number % 2 == 0 (even)
# -- result.append(number)
# return result

def descending_even_numbers(num_list):
    reversed_list = num_list[::-1]
    result = []

    for num in reversed_list:
        if num % 2 == 0:
            result.append(num)

    return result


number_list = [1, 2, 3, 4, 5, 6]

print(descending_even_numbers(number_list))