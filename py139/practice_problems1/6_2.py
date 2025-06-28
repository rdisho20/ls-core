'''Write a Python function called `process_file` that:
•   Takes a filename as a parameter
•   Opens the file for reading using a `with` statement
•   Reads all lines from the file
•   Returns a list of lines with whitespace stripped from each line
•   Handles the case where the file doesn't exist by returning an empty list
Include proper error handling in your solution.'''

def process_file(filename):
    try:
        with open(filename, 'r') as file:
            return [line.strip() for line in file]
    except FileNotFoundError:
        return []