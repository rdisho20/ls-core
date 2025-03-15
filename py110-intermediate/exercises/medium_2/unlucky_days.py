from datetime import date

def friday_the_13ths(year):
    dates = [
        date(year, 1, 13), date(year, 2, 13), date(year, 3, 13), 
        date(year, 4, 13), date(year, 5, 13), date(year, 6, 13), 
        date(year, 7, 13), date(year, 8, 13), date(year, 9, 13), 
        date(year, 10, 13), date(year, 11, 13), date(year, 12, 13), 
    ]

    count = 0
    for day in dates:
        if day.weekday() == 4:
            count += 1
    
    return count

print(friday_the_13ths(1986) == 1)      # True
print(friday_the_13ths(2015) == 3)      # True
print(friday_the_13ths(2017) == 2)      # True

'''LS Solution
Nearly identical, however LS uses a list comprehension and for loop

import datetime

def friday_the_13ths(year):
    thirteenths = [datetime.date(year, month, 13)           # right here w/ 'month' !!!!
                   for month in range(1, 13)]

    count = 0
    for day in thirteenths:
        if day.weekday() == 4:
            count += 1

    return count


'''