# using LS algorithm
def calculate_leftover_blocks(blocks):
    blocks_remaining = blocks
    current_layer = 0

    while True:
        current_layer += 1
        blocks_required = current_layer * current_layer

        if blocks_remaining >= blocks_required:
            blocks_remaining = blocks_remaining - blocks_required
            continue
        else:
            return blocks_remaining

print(calculate_leftover_blocks(0) == 0)  # True
print(calculate_leftover_blocks(1) == 0)  # True
print(calculate_leftover_blocks(2) == 1)  # True
print(calculate_leftover_blocks(4) == 3)  # True
print(calculate_leftover_blocks(5) == 0)  # True
print(calculate_leftover_blocks(6) == 1)  # True
print(calculate_leftover_blocks(14) == 0) # True
print(calculate_leftover_blocks(9) == 4) # True
print(calculate_leftover_blocks(24) == 10) # True

"""
My code is 1 line longer than LS solution BUT
it follows their exact informal pseudocode algorithm more closely
than their solution :-)

LS Solution:
def calculate_leftover_blocks(n):
    current_layer = 0
    remaining_blocks = n

    required_blocks = (current_layer + 1) ** 2

    while remaining_blocks >= required_blocks:
        remaining_blocks -= required_blocks
        current_layer += 1
        required_blocks = (current_layer + 1) ** 2

    return remaining_blocks
"""
