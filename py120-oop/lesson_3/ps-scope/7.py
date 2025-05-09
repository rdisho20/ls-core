class Student:
    school_name = 'Oxford'

    def __init__(self, name):
        self.name = name
    
    @classmethod
    def return_school_name(cls):
        return cls.school_name


print(Student.school_name)
print(Student.return_school_name())