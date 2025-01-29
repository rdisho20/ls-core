# given IP address, return whether or not it is a 4 dot seperated IP address
# count the amount of '.' in ip address
# if count == 3, return '4 dot separated IP'
# else: return 'NOT 4 dot separated IP'

def is_an_ip_number(str):
    if str.isdigit():
        number = int(str)
        return 0 <= number <= 255
    return False

def is_dot_separated_ip_address(input_string):
    dots = input_string.count('.')
    if dots == 3:
        return '4 dot sep IP'

    return 'NOT 4 dot sep IP'

print(is_dot_separated_ip_address('10.4.5.11')) # 4 dot sep
print(is_dot_separated_ip_address('4.5.5')) # NOT
print(is_dot_separated_ip_address('1.2.3.4.5')) # NOT