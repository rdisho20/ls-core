# Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits 
# in the given string of digits.

def greatest_product(num_string):
    products = []

    for idx, digit in enumerate(num_string):
        if idx == len(num_string) - 4:
            break

        product = int(digit)

        for multiplier in range(idx + 1, idx + 5):
            product *= int(num_string[multiplier])

        products.append(product)

    return max(products)

print(greatest_product("123834539327238239583") == 3240)
print(greatest_product("395831238345393272382") == 3240)
print(greatest_product("92494737828244222221111111532909999") == 5292)
print(greatest_product("92494737828244222221111111532909999") == 5292)
print(greatest_product("02494037820244202221011110532909999") == 0)