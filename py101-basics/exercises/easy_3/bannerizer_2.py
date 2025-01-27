# given a string and max width
# if a string length is too longer than max width
# - print chars starting @ max width :: string @ \n up to max width,
#   then continue IF necessary
# -- integer division (string length by max width) + 1 == new_lines
# -- get remainder (string length by max width) " " concat -> end :: string

def one_line_fit(string):
    print(f"+-{''.join('-' for _ in string)}-+")
    print(f"| {''.join(' ' for _ in string)} |")
    print(f"| {string} |")
    print(f"| {''.join(' ' for _ in string)} |")
    print(f"+-{''.join('-' for _ in string)}-+")

def print_in_box(string, max_width=None):
    if max_width:
        print("if MAX WIDTH")
        if max_width < len(string):
            print("IF MAX WIDTH < STRING LENGTH")
            new_lines = (len(string) // max_width)
            whitespace = (len(string) % max_width)

            print(f"+-{''.join('-' * max_width)}-+")
            print(f"| {''.join(' ' * max_width)} |")

            for line in range(new_lines):
                while line < new_lines:
                    start_index = max_width * line
                    if line == 0:
                        print(f"| {string[:max_width]} |")
                    elif line == new_lines - 1:
                        print(f"| {string[start_index:] + ' ' * whitespace} |")
                    else:
                        print(f"| {string[start_index:start_index + max_width]} |")
                    
                    line += 1

            print(f"| {''.join(' ' * max_width)} |")
            print(f"+-{''.join('-' * max_width)}-+")
        else:
            print("IF MAX WIDTH 'ELSE'")
            one_line_fit(string)
    else:
        print("IF MAX WIDTH 'ELSE'")
        one_line_fit(string)

print_in_box('To boldly go where no one has gone before.', 40) #IF IF
print_in_box('To boldly go where no one has gone before.', 5) # IF IF
# print_in_box('To boldly go where no one has gone before.', 500) # IF ELSE
# print_in_box('To boldly go where no one has gone before.') # ELSE
print_in_box('This a super long string. This a super long string. '
             'This a super long string. This a super long string. '
             'This a super long string. This a super long string. '
             'This a super long string. This a super long string. '
             'This a super long string. This a super long string. ', 110) # IF IF