def time_conversion(time_string):
    time_tbl = {}
    time_tbl["hours"] = int(time_string[:2])
    time_tbl["minutes"] = int(time_string[3:])

    return time_tbl

def after_midnight(time_string):
    time_tbl = time_conversion(time_string)

    total_minutes = time_tbl["hours"] * 60 + time_tbl["minutes"]
    return total_minutes if total_minutes < 1440 else 0

def before_midnight(time_string):
    time_tbl = time_conversion(time_string)

    total_minutes = 1440 - (time_tbl["hours"] * 60 + time_tbl["minutes"])
    return total_minutes if total_minutes < 1440 else 0

print(after_midnight("00:00") == 0)     # True
print(before_midnight("00:00") == 0)    # True
print(after_midnight("12:34") == 754)   # True
print(before_midnight("12:34") == 686)  # True
print(after_midnight("24:00") == 0)     # True
print(before_midnight("24:00") == 0)    # True
print(after_midnight("00:32") == 32)     # True
print(before_midnight("00:32") == 1408)    # True