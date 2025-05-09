Create a function that takes a string and returns a dictionary where:

    •   The keys are all possible 2-character substrings in the input string
    •   The values are how many times each substring appears in the string

If the input string has fewer than 2 characters, return an empty dictionary.    

        print(substring_frequency("hello") == {'he': 1, 'el': 1, 'll': 1, 'lo': 1})
        print(substring_frequency("banana") == {'ba': 1, 'an': 2, 'na': 2})
        print(substring_frequency("a") == {})
        print(substring_frequency("") == {})
        print(substring_frequency("aaa") == {'aa': 2})