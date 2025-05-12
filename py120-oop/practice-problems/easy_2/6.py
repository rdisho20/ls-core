class Cat:
    def __init__(self, type):
        self.type = type
    
    def __str__(self):
        return "I am a hairball."
    
print(Cat('hairball'))