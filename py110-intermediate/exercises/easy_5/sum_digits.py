def sum_digits(number):
    num_lst = []

    while number > 0:
        tmp_tup = divmod(number, 10)
        num_lst.append(tmp_tup[1])
        number = tmp_tup[0]
    
    return sum(num_lst)

print(sum_digits(23) == 5)              # True
print(sum_digits(496) == 19)            # True
print(sum_digits(123456789) == 45)      # True