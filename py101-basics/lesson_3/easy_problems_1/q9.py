advice = "Few things in life are as important as house training your pet dinosaur."
# Expected output:
# Few things in life are as important as

number = advice.find(" house")
advice = advice[0:number]

print(advice)