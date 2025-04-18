class Car:
    def __init__(self, model, year, color):
        self._model = model
        self._year = year
        self.color = color
        self.speed = 0
    
    # made a static method, because doesn't require access to class or instance attributes
    # but DOESN'T MAKE SENSE, given the fact that it runs a calculation and changes
    # based on the arguments passed to it, which by definition is not static
    @staticmethod
    def calc_print_gas_mileage(cls, distance_traveled, fuel_burned):
        avgerage_gas_mileage = distance_traveled // fuel_burned
        print(f'{avgerage_gas_mileage} is your average gas mileage.')
    
    def turn_engine_on(self):
        print((f'The car: {self.model} '
               f'Year {self.year} and Color {self.color} '
               f'Engine is now turned ON.'))
    
    def accelerate(self, num):
        self.speed += num
        print('accelerating...')
    
    def brake(self, num):
        self.speed -= num
        print('braking...')
    
    def turn_engine_off(self):
        self.speed = 0
        print((f'The car: {self.model} '
               f'Year {self.year} and Color {self.color} '
               f'Engine is now turned OFF.'))
    
    def get_speed(self):
        print(f'Current speed is now {self.speed}')
    
    def spray_paint_car(self, color):
        self.color = color
        print(f'You sprayed your car {self.color}')
    
    @property
    def color(self):
        return self._color
    
    @color.setter
    def color(self, color):
        if not isinstance(color, str):
            raise TypeError('Try again by entering a string value next time')

        self._color = color
    
    @property
    def model(self):
        return self._model
    
    @property
    def year(self):
        return self._year

# 1
tacoma = Car('Toyota Tacoma', 2001, 'Red')
print(tacoma.model)
print(tacoma.year)
print(tacoma.color)
tacoma.turn_engine_on()
tacoma.accelerate(10)
tacoma.brake(50)
tacoma.turn_engine_off()
tacoma.accelerate(20)
tacoma.get_speed()

# 2
tacoma.color = 'Blue'
print(tacoma.color)

# 3
tacoma.spray_paint_car('Aqua')
print(tacoma.color)

# 4
Car.calc_print_gas_mileage(351,13)

