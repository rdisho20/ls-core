numbers = [1, 2, 3, 4, 5]

#Look before you leap
'''def sixth(lst):
    find = lst

    if find == -1:
        raise IndexError(None)
    
    return lst[5]'''


#Ask forgiveness, not permission
def sixth(lst):
    try:
        return lst[5]
    except IndexError:
        return None


print(sixth(numbers))

'''LS solution
# LBYL approach
def get_sixth_element_lbyl():
    if len(numbers) > 5:
        return numbers[5]

    return None

# AFNP approach
def get_sixth_element_afnp():
    try:
        return numbers[5]
    except IndexError:
        return None
'''