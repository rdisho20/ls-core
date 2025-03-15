def is_invalid(angles):
    if 0 in angles or sum(angles) != 180:
        return True

    return False


def triangle(a1, a2, a3):
    angles = [a1, a2, a3]

    if is_invalid(angles):
        return 'invalid'
    
    if 90 in angles:
        return 'right'
    
    if a1 < 90 and a2 < 90 and a3 < 90:
        return 'acute'
    
    if a1 > 90 or a2 > 90 or a3 > 90:
        return 'obtuse'


print(triangle(60, 70, 50) == "acute")      # True
print(triangle(30, 90, 60) == "right")      # True
print(triangle(120, 50, 10) == "obtuse")    # True
print(triangle(0, 90, 90) == "invalid")     # True
print(triangle(50, 50, 50) == "invalid")    # True