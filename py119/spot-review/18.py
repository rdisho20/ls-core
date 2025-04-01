#Write a function, persistence, that takes in a positive parameter
#`num` and returns its multiplicative persistence, which is the number
#of times you must multiply the digits in `num` until you reach a single digit.
def persistence(number):
    if len(str(number)) == 1:
        return 0

    product = number
    product_string = str(product)

    persistence = 0
    while len(product_string) > 1:
        product_list = list(product_string)
        product = 1
        persistence += 1

        for num_str in product_list:
            product *= int(num_str)

        if len(str(product)) == 1:
            return persistence
        
        product_string = str(product)


print(persistence(39)) # should return 3, because 3*9=27, 2*7=14, 1*4=4
# and 4 has only one digit
print(persistence(999)) # should return 4, because 9*9*9=729, 7*2*9=126,
# 1*2*6=12, and finally 1*2=2
print(persistence(4)) # should return 0, because 4 is already a one-digit number
print(persistence(25)) # should return 2, because 2*5=10, and 1*0=0