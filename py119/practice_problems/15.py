def greatest_product(num):
    products = []

    for idx in range(0, len(num)):
        if idx == len(num) - 3:
            break
        product = 1

        for s_idx in range(idx, idx + 4):
            if s_idx == len(num) - 1:
                product *= int(num[s_idx])
                break
            else:
                product *= int(num[s_idx])

        products.append(product)

    return max(products)

print(greatest_product('23456') == 360)      # 3 * 4 * 5 * 6
print(greatest_product('3145926') == 540)    # 5 * 9 * 2 * 6
print(greatest_product('1828172') == 128)    # 1 * 8 * 2 * 8
print(greatest_product('123987654') == 3024) # 9 * 8 * 7 * 6