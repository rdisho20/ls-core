class Transform:
    def __init__(self, string):
        self.string = string
    
    @classmethod
    def lowercase(cls, string):
        return string.lower()
    
    def __str__(self):
        return self.string
    
    def uppercase(self):
        return self.string.upper()


my_data = Transform('abc')
print(my_data.uppercase())
print(Transform.lowercase('XYZ'))