def triangle(s1, s2, s3):
    sides = [s1, s2, s3]
    longest = sides.pop(sides.index(max(sides)))
    shortest = sides.pop(sides.index(min(sides)))
    other = sides.pop()

    
    if longest == 0 or shortest == 0 or other == 0:
        return 'invalid'

    if longest == shortest and shortest == other:
        return 'equilateral'
    
    if longest != shortest and shortest != other and longest != other:
        if (shortest + other) < longest:
            return 'invalid'
        return 'scalene'

    if shortest == other:
        if (shortest + other) < longest:
            return 'invalid'
        return 'isosceles'
    
    if shortest < longest and other <= longest:
        if (shortest + other) < longest:
            return 'invalid'
        return 'isosceles'


print(triangle(3, 3, 3) == "equilateral")  # True
print(triangle(3, 3, 1.5) == "isosceles")  # True
print(triangle(3, 4, 5) == "scalene")      # True
print(triangle(0, 3, 3) == "invalid")      # True
print(triangle(3, 1, 1) == "invalid")      # True

'''Caroline's Solution, very clever

def is_invalid(sides):
    if 0 in sides:
        return True

    sides.sort()
    if (sides[0] + sides[1]) <= sides[2]:
        return True

def triangle(side1, side2, side3):
    sides = [side1, side2, side3]
    if is_invalid(sides):
        return 'invalid'

    match len(set(sides)):
        case 1: 
            return "equilateral"
        case 2:
            return "isosceles"
        case 3: 
            return "scalene"
'''