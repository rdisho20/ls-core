class SwimMixin:
    def enable_swimming(self):
        self.can_swim = True
    
    def can_i_swim(self):
        if not hasattr(self, 'can_swim'):
            self.can_swim = False
        
        return self.can_swim

class Dog(SwimMixin):
    def swim(self):
        if self.can_i_swim():
            print("I am swimming")