def is_valid_walk(dir_lst):
    if len(dir_lst) != 10:
        return False
    
    dir_dict = {dir: 0 for dir in dir_lst}

    for dir in dir_lst:
        match dir:
            case 'n':
                dir_dict['s'] += 1
                dir_dict[dir] -= 1
            case 's':
                dir_dict['n'] += 1
                dir_dict[dir] -= 1
            case 'e':
                dir_dict['w'] += 1
                dir_dict[dir] -= 1
            case 'w':
                dir_dict['e'] += 1
                dir_dict[dir] -= 1
    # all values falsy? that means returned to starting point, return True
    return not all(dir_dict.values())



print(is_valid_walk(['n','s','n','s','n','s','n','s','n','s'])) # should return True
print(is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e'])) # should return False
print(is_valid_walk(['w'])) # should return False
print(is_valid_walk(['n','n','n','s','n','s','n','s','n','s'])) # should return F