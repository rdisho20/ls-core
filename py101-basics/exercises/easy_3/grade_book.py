# X given 3 grades, determine the average then return grade letter for avg
# define a function taking 3 numbers as parameters
# - get avg :: 3 args
# - return grade based on avg using 'in' range()
GRADES = {
    range(0, 60): 'F',
    range(60, 70): 'D',
    range(70, 80): 'C',
    range(80, 90): 'B',
    range(90, 101): 'A',
}

# This approach avoids hashability issues by treating range as a 
# container rather than a hashable key for direct lookups. -ChatGPT
def get_grade(num1, num2, num3):
    avg = (num1 + num2 + num3) // 3

    for key in GRADES:
        if avg in key:
            return GRADES[key]

"""
    match avg:
        case avg if avg in range(0, 60):
            return "F"
        case avg if avg in range(60, 70):
            return "D"
        case avg if avg in range(70, 80):
            return "C"
        case avg if avg in range(80, 90):
            return "B"
        case avg if avg in range(90, 101):
            return "A"
"""

print(get_grade(95, 90, 93) == "A")      # True
print(get_grade(50, 50, 95) == "D")      # True