class Measurable:
    def __init__(self):
        pass

class Box(Measurable):
    pass

class Liquid(Measurable):
    pass

class Distance(Measurable):
    pass

measurements = [
    Box(width=2, height=3, depth=4),
    Liquid(volume=20),
    Distance(meters=15),
    Box(width=1, height=1, depth=1),
    Liquid(volume=10),
    Distance(meters=5)
]

# Should be able to sort these objects
sorted_measurments = sorted(measurements)
print("Sorted measurements:")
for m in sorted_measurments:
    print(str(m))

# Should be able to add compatible objects
box1 = Box(width=2, height=3, depth=4)
box2 = Box(widht=1, height=1, depth=1)
combined_box = box1 + box2
print(f"Combined box: {combined_box}")

liquid1 = Liquid(volume=20)
liquid2 = Liquid(volume=10)
combined_liquid = liquid1 + liquid2
print(f"Combined liquid: {combined_liquid}")