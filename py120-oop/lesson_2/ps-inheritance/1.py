class Dog:
    def speak(self):
        return 'bark!'
    
    def sleep(self):
        return 'sleeping!'

class Bulldog(Dog):
    def sleep(self):
        return 'snoring!'

teddy = Dog()
print(teddy.speak())
print(teddy.sleep())

karl = Bulldog()
print(karl.speak())
print(karl.sleep())