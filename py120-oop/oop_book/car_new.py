class Car:

    def __init__(self, model, year, color):
        self.model = model
        self.year = year
        self.color = color
    
    def __str__(self):        
        return f'{self.color.title()} {self.year} {self.model}'
    
    def __repr__(self):
        model = repr(self.model)
        year = repr(self.year)
        color = repr(self.color)
        return f'Car({model}, {year}, {color})'

vwbuzz = Car('ID.Buzz', 2024, 'red')
print(vwbuzz)
print(repr(vwbuzz))
print(repr(vwbuzz.model))