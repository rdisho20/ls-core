# X ignoreing input validation...
# X prompt input for bill amount and tip rate
# X given bill amount and tip rate compute tip and total
# assign bill amount and tip rate to variables
# def function taking two parameters: bill amnt & tip rate
# - compute tip multiply (tip rate divided by 100) by bill amnt
# - assign computed value to var 'tip'
# - assign 'tip' + 'bill amnt' to 'total'
# - print 'tip' and 'total'

def compute_tip(bill, rate):
    tip = bill * (rate / 100)
    total = bill + tip
    print(f"The tip is ${tip:.2f}")
    print(f"The total is ${total:.2f}")


print("What is the bill?")
bill_amnt = int(input())

print("What is the tip percentage?")
tip_rate = int(input())

compute_tip(bill_amnt, tip_rate)