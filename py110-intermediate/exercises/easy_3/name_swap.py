def swap_name(string):
    list_name = string.split()
    return ', '.join([list_name[idx] 
                      for idx in range(len(list_name) - 1, -1, -1)])

print(swap_name('Joe Roberts') == "Roberts, Joe")   # True

'''LS solution using slicing
def swap_name(name):
    return ', '.join(name.split()[::-1])
'''