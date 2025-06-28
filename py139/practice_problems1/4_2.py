'''Create a function called `create_user_profile` that takes one positional parameter `username` 
and three keyword-only parameters: `email` (required), `age` (optional, default 18), and 
`active` (optional, default True).
The function should return a dictionary with all the user information.
Test Cases:'''

def create_user_profile(username, /, *, email, age=18, active=True):
    return {
        'username': username,
        'email': email,
        'age': age,
        'active': active,
    }

# Should work:
profile1 = create_user_profile("john_doe", email="john@example.com")
print(profile1)  
# {'username': 'john_doe', 'email': 'john@example.com', 'age': 18, 'active': True}

profile2 = create_user_profile("jane_smith", email="jane@example.com", age=25, active=False)
print(profile2)  
# {'username': 'jane_smith', 'email': 'jane@example.com', 'age': 25, 'active': False}

# Should raise TypeError:
create_user_profile("user", "user@example.com")  # TypeError: missing keyword-only argument