'''
NOUNS:
Minutes

VERBS:
Add & Subtract (minutes)

P-
input:
output:

E-rules
feature of adding & subtracting minutes given by Clock object
    do not mutate clock, create new clock object when adding or subtracting
2 clock objects representing same time are equal
Do not use built-in date or time functionality; just arthmetic operations

D-

A-
given minutes greater than 59
while 'minutes' >=60
    add 1 to 'increment_hr'
    subtract 60 from 'current_min'
'''

class Clock:
    def __init__(self, hour, minute):
        self.hour = hour
        self.minute = minute

    @classmethod
    def at(cls, hour, minute=0):
        return Clock(hour, minute)

    def __str__(self):
        return f"{self.hour:02d}:{self.minute:02d}"

    def __eq__(self, other):
        if not isinstance(other, Clock):
            return NotImplemented
        return (self.hour, self.minute) == (other.hour, other.minute)

    def __add__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        current_min = self.minute + other
        current_hr = self.hour
        while current_min >= 60:
            current_hr += 1
            current_min -= 60
            if current_hr == 24:
                current_hr = 0

        return Clock(current_hr, current_min)

    def __sub__(self, other):
        if not isinstance(other, int):
            return NotImplemented

        current_min = self.minute - other
        current_hr = self.hour
        while current_min < 0:
            current_hr -= 1
            current_min += 60
            if current_hr == -1:
                current_hr = 23

        return Clock(current_hr, current_min)

'''
clock = Clock.at(10) + 3061
print(clock) # 13:01

clock = Clock.at(10) - 3061
print(clock) # 06:59
'''