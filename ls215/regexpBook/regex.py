import re

'''
def p(text):
    print(re.findall(r'^c.t',
                     text,
                     flags=re.IGNORECASE))

p("cat")         # ['cat']
p("cot\n")       # ['cot']
p("CATASTROPHE") # ['CAT']
p("WILDCAUGHT")  # []
p("wildcat\n")   # []
p("-CET-")       # []
p("Yacht")       # []
'''

def p(regex, text):
    print(re.findall(regex,
                    text,
                    flags=re.IGNORECASE | re.MULTILINE))

text = ("cat\ncot\nCATASTROPHE\nWILDCAUGHT\n" +
        "wildcat\n-GET-\nYacht")

p(r'^c.t', text) # ['cat', 'cot', 'CAT']
p(r'c.t$', text) # ['cat', 'cot', 'cat', 'cht']