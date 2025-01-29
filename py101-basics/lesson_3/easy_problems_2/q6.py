title = "Flintstone Family Members"
table = '-' * 40
char_number_no_space = len(title.replace(" ", ""))
white_space_amnt = (40 - char_number_no_space) // 2
split_title = title.split(' ')
new_title = (' ' * white_space_amnt).join(split_title)

print(new_title)
print(table)
print(title.center(40))
