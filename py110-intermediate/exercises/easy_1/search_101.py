def search_first_5(number_list):
    last_number = number_list[-1]

    for idx in range(len(number_list)):
        if idx == 5:
            return f"{last_number} is not in {number_list}"
        elif last_number == number_list[idx]:
            return f"{last_number} is in {number_list}"

def validate_input(string):
    try:
        if int(string) >= 0:
            return False
    except ValueError:
        return True
    
    return True

def retrieve_input():
    user_input = input("Enter a non-negative integer: ")

    while validate_input(user_input):
        user_input = input("Please try again: ")
    
    return user_input

def generate_number_list():
    number_list = []

    for num in range(6):
        number_list.append(int(retrieve_input()))

    return number_list

def run_app():
    number_list = generate_number_list()
    print(search_first_5(number_list))

run_app()


''' All passed
print(search_first_5([1, 2, 3, 5, 8, 9]))           # 9 is not in...
print(search_first_5([25, 33, 40, 32, 112, 5]))     # 5 is not in...
print(search_first_5([25, 33, 42, 1, 52, 25]))      # 25 is in...
print(search_first_5([0, 100, 22, 30, 105, 10]))    # 10 is not in...
'''