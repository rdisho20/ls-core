import unittest
from todolist import TodoList

class TodoListTest(unittest.TestCase):
    def setUp(self):
        self.todolist = TodoList()
        self.todolist.task1 = 'Take out trash'
        self.todolist.task2 = 'Clean room'
        self.todolist.task3 = 'Make dinner'