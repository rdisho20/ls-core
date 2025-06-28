'''Write a function called `flexible_calculator` that accepts:
•   A required positional-only parameter `operation` (string: 'add', 'multiply', 'max', 'min')
•   Any number of numeric positional arguments to operate on
•   Any number of keyword arguments that will be included in a metadata dictionary
The function should return a tuple: (result_of_operation, metadata_dict).
Test Cases:'''

def flexible_calculator(operation, /, *num, **metadata):
    match operation:
        case 'add':
            result = sum(num)
        case 'multiply':
            result = 1

            for number in num:
                result *= number
        case 'max':
            result = max(num)
        
    return (result, {key: value for key, value in metadata.items()})

result, meta = flexible_calculator('add', 1, 2, 3, 4, author="Alice", version=1.0)
print(result)    # 10
print(meta)      # {'author': 'Alice', 'version': 1.0}

result, meta = flexible_calculator('multiply', 2, 3, 5, timestamp="2024-01-01")
print(result)    # 30
print(meta)      # {'timestamp': '2024-01-01'}

result, meta = flexible_calculator('max', 8, 2, 15, 3)
print(result)    # 15
print(meta)      # {}