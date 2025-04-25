class Banner:

    def __init__(self, message, fixed_width=0):
        self.message = message
        self.fixed_width = fixed_width

    def __str__(self):
        return "\n".join([self._horizontal_rule(),
                          self._empty_line(),
                          self._message_line(),
                          self._empty_line(),
                          self._horizontal_rule()])
    
    def _empty_line(self):
        return (f"| {(' ' * (self.fixed_width // 2) if self.fixed_width > 0 else '')}"
                f"{(' ' * len(self.message))}"
                f"{(' ' * (self.fixed_width // 2) if self.fixed_width > 0 else '')} |")

    def _horizontal_rule(self):
        return (f"+-{('-' * (self.fixed_width // 2) if self.fixed_width > 0 else '')}"
                f"{('-' * len(self.message))}"
                f"{('-' * (self.fixed_width // 2) if self.fixed_width > 0 else '')}-+")

    def _message_line(self):
        return (f"| {(' ' * (self.fixed_width // 2) if self.fixed_width > 0 else '')}"
                f"{self.message}"
                f"{(' ' * (self.fixed_width // 2) if self.fixed_width > 0 else '')} |")
    
banner = Banner("To boldly go where no one has gone before.", 10)
print(banner)
print()
banner = Banner('')
print(banner)