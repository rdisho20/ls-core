import unittest
from student import Student

class StudentTest(unittest.TestCase):
    def setUp(self):
        self.student1 = Student('John', 123)

    def test_enroll_student(self):
        self.student1.enroll('Science')
        self.assertIn('Science', self.student1.courses)

    def test_add_student_grade(self):
        self.student1.enroll('Science')
        self.student1.add_grade('Science', 98)

        science_grade = self.student1.grades['Science']
        self.assertGreaterEqual(science_grade >= 0)
        self.assertLessEqual(science_grade <= 100)
        self.assertIn('Science', self.student1.grades)

    def test_get_student_gpa(self):
        self.student1.enroll('Science')
        self.student1.enroll('Math')
        self.student1.add_grade('Science', 98)
        self.student1.add_grade('Math', 100)

        gpa = self.student1.get_gpa()
        self.assertEqual(gpa, 99)

    def test_valid_student_id(self):
        self.assertIsInstance(self.student1.student_id, int)