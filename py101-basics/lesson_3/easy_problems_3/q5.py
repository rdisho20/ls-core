# rewrite:
"""
def is_color_valid(color):
    if color == "blue" or color == "green":
        return True
    else:
        return False
"""

def is_color_valid(color):
    return color if color in {'blue', 'green'} else False

print(is_color_valid('blue'))
print(is_color_valid('green'))
print(is_color_valid('red-ish pink'))