def before_midnight(number):
    hours, minutes = divmod(number, 60)

    if hours < -24:
        hours, extra = divmod(hours, 24)

        return f"{24 + hours:02d}:{minutes:02d}"

    return f"{(24 + hours):02d}:{minutes:02d}"

def after_midnight(number):
    hours, minutes = divmod(number, 60)

    if hours > 24:
        hours, extra = divmod(hours, 24)

        return f"{hours:02d}:{minutes:02d}"

    return f"{hours:02d}:{minutes:02d}"

def time_of_day(number):
    if number < 0:
        return before_midnight(number)

    elif number > 0:
        return after_midnight(number)

    return "00:00"

print(time_of_day(0) == "00:00")        # True
print(time_of_day(-3) == "23:57")       # True
print(time_of_day(35) == "00:35")       # True
print(time_of_day(-1437) == "00:03")    # True
print(time_of_day(3000) == "02:00")     # True
print(time_of_day(800) == "13:20")      # True
print(time_of_day(-4231))# == "01:29")    # True

'''
# I should try this exercise again...
# try to solve it my way... my code just needs some refinement
# should use 'minutes in a day' more as part of my calculation

----------------
#LS solution:

MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def format_time(hours, minutes):
    return f"{hours:02d}:{minutes:02d}"

def time_of_day(delta_minutes):
    while delta_minutes < 0:
        delta_minutes += MINUTES_PER_DAY

    delta_minutes = delta_minutes % MINUTES_PER_DAY
    hours = delta_minutes // MINUTES_PER_HOUR
    minutes = delta_minutes % MINUTES_PER_HOUR

    return format_time(hours, minutes)
'''