def invalid_age(age):
    try:
        int(age)

    except ValueError:
        print("You did not enter a number. Please Try again.")
        return True
    
    return False

user_name = input("Please enter your name: ")

while True:
    print("Please eneter your age: ")
    user_age = input()

    if not invalid_age(user_age):
        break

print(f"Hello {user_name}! You are {user_age} year(s) old!")