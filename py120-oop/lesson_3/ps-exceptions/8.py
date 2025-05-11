students = {'John': 25, 'Jane': 22, 'Doe': 30}

def get_age(name):
    try:
        return students[name]
    except KeyError as e:
        # print(f"KeyError: {e}")
        return 'student not found'
