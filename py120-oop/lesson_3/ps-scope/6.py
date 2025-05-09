class Student:
    school_name = 'Oxford'

    def __init__(self, name):
        self.name = name

student1 = Student('mack')
student2 = Student('will')

print(student1.name)
print(student1.__class__.school_name)
print(student2.name)
print(student2.__class__.school_name)