class KrispyKreme:
    def __init__(self, filling, glazing):
        self.filling = filling
        self.glazing = glazing
    
    def __str__(self):
        if not self.filling:
            filling = 'Plain'
        if self.filling:
            filling = self.filling
        if not self.glazing:
            glazing = ''
        if self.glazing:
            glazing = f' with {self.glazing}'
        
        return filling + glazing

donut1 = KrispyKreme(None, None)
donut2 = KrispyKreme('Vanilla', None)
donut3 = KrispyKreme(None, 'sugar')
donut4 = KrispyKreme(None, 'chocolate sprinkles')
donut5 = KrispyKreme('Custard', 'icing')

print(donut1)
print(donut2)
print(donut3)
print(donut4)
print(donut5)


'''LS solution -> __str__ method
def __str__(self):
    options = []
    options.append(self.filling or 'Plain')
    if self.glazing is not None:
        options.append(self.glazing)

    return ' with '.join(options)
'''