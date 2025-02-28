def swap_name(string):
    name_list = string.split()
    return f"{name_list[-1]}, {' '.join(name_list[0:len(name_list)-1])}"

print(swap_name('Karl Oskar Henriksson Ragvals'))
                #== "Ragvals, Karl Oskar Henriksson")  # True

'''
# Other student's solution; works for original problem, too!

def swap_name(name):
    # splits into list of 2 elements, then reverse and join elements
    outname = name.rsplit(" ", 1)[::-1]
    return outname
'''