FACTOR_DICT = {
    'min': 60,
    'sec': 3600
}

DEGREE_SYM = "\u00B0"

def dms(float):
    degree = int(float)
    degree_factor = float - degree

    minutes_float = degree_factor * FACTOR_DICT['min']
    minutes = int(minutes_float)
    minutes_factor = minutes_float - minutes

    seconds_float = (minutes_factor * FACTOR_DICT['sec']) / FACTOR_DICT['min']
    seconds = int(seconds_float)

    return f"{degree}{DEGREE_SYM}{minutes:02d}'{seconds:02d}\""

# All of these examples should print True
print(dms(30) == "30°00'00\"")
print(dms(76.73) == "76°43'48\"")
print(dms(254.6) == "254°35'59\"")
print(dms(93.034773) == "93°02'05\"")
print(dms(0) == "0°00'00\"")
print(dms(360) == "360°00'00\"" or dms(360) == "0°00'00\"")