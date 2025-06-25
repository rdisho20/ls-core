'''Given a list of dictionaries representing students with their names 
    and grades, use lambda functions to:
1.  Filter students with grades >= 85
2.  Sort the filtered students by grade in descending order
3.  Extract just the names from the sorted listTest Cases:
'''

students = [
    {'name': 'Alice', 'grade': 92},
    {'name': 'Bob', 'grade': 76},
    {'name': 'Charlie', 'grade': 88},
    {'name': 'Diana', 'grade': 95},
    {'name': 'Eve', 'grade': 82}
]

# Expected result: ['Diana', 'Alice', 'Charlie']
filtered = filter(lambda student: student['grade'] >= 85, students)

students_sorted = sorted(list(filtered),
                         key=lambda student: list(student.values())[1],
                         reverse=True)

names_only = list(student['name'] for student in students_sorted)
print(names_only)