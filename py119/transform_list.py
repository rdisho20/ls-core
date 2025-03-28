# w/ range
def transform_list(lst):
    result = []

    for idx in range(len(lst)):
        if idx % 2 == 1:
            result.append(lst[idx] * 2)
        else:
            result.append(lst[idx])
    
    return result

# w/ enumerate
def transform_list(lst):
    result = []

    for idx, value in enumerate(lst):
        if idx % 2 == 1:
            result.append(value * 2)
        else:
            result.append(value)
    
    return result