def minilang(program_str):
    stack = []
    register = 0

    program_tokens = program_str.split()
    
    for token in program_tokens:
        try:
            register = int(token)
        except ValueError:
            pass

        if "PUSH" in token:
            stack.append(register)

        elif "ADD" in token:
            register += stack.pop()

        elif "SUB" in token:
            register -= stack.pop()

        elif "MULT" in token:
            register *= stack.pop()

        elif "DIV" in token:
            register //= stack.pop()

        elif "REMAINDER" in token:
            register %= stack.pop()

        elif "POP" in token:
            register = stack.pop()

        elif "PRINT" in token:
            print(register)
        
    return None


minilang('PRINT')
# 0
print()
minilang('5 PUSH 3 MULT PRINT')
# 15
print()
minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
# 5
# 3
# 8
print()
minilang('5 PUSH POP PRINT')
# 5
print()
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
# 5
# 10
# 4
# 7
print()
minilang('3 PUSH PUSH 7 DIV MULT PRINT')
# 6
print()
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT')
# 12
print()
minilang('-3 PUSH 5 SUB PRINT')
# 8
print()
minilang('6 PUSH')
# (nothing is printed)
print()