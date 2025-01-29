# Given a noun, verb, adverb, and adjective
# print multi-line f-string taking user input, making story
noun = input("Enter a noun: ")
verb = input("Enter a verb: ")
adj = input("Enter an adj.: ")
adv = input("Enter an adv.: ")

print(f"""
Do you {verb} your {adj} {noun} {adv}? That's hilarious!
The {adj} {noun} {verb}s {adv} over the lazy dog.
The {noun} {adv} {verb}s up to Joe's {adj} turtle.
      """)