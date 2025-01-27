def one_line_fit(string):
    print(f"+-{''.join('-' for _ in string)}-+")
    print(f"| {''.join(' ' for _ in string)} |")
    print(f"| {string} |")
    print(f"| {''.join(' ' for _ in string)} |")
    print(f"+-{''.join('-' for _ in string)}-+")

def print_in_box(string, max_width=None):
    char_list = list(string)
    if max_width:
        if max_width < len(string):
            print(f"+-{''.join('-' * max_width)}-+")
            print(f"| {''.join(' ' * max_width)} |")
            print(f"| {''.join(char_list[:max_width])} |")
            print(f"| {''.join(' ' * max_width)} |")
            print(f"+-{''.join('-' * max_width)}-+")
        else:
            one_line_fit(string)
    else:
        one_line_fit(string)

print_in_box('To boldly go where no one has gone before.', 40)
print_in_box('To boldly go where no one has gone before.', 5)
print_in_box('To boldly go where no one has gone before.', 500)
print_in_box('To boldly go where no one has gone before.')