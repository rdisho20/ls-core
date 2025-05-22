# Implement a function that simulates a coordinate system transformation.
# The function takes a tuple of (x, y, z) coordinates and performs a rotation
# around each axis based on three angle parameters (also passed as a tuple).
# Use tuple unpacking in your solution to make the code more readable.

'''
input: tuple of coordinates
output: 3 angle parameters as tuple; used to rotate coordinates

E-rules
Use tuple unpacking

I-rules
any of original angles can be zero
any of angle parameters can be 0

'''

import math

def rotate_3d_point(point, angles):
    """
    Args:
        point: A tuple of (x, y, z) coordinates
        angles: A tuple of (angle_x, angle_y, angle_z) in radians
    
    Returns:
        A tuple containing the rotated (x, y, z) coordinates
    """
    x, y, z = point
    angle_x, angle_y, angle_z = angles

    return (x + angle_x, y + angle_y, z + angle_z)
    

# Test with 90-degree rotation around the z-axis
original = (1.0, 1.0, 0.0)
angles = (0.0, 0.0, math.pi/2)
result = rotate_3d_point(original, angles)
print(result[0] - (-1.0) < 0.0001)  # Should be close to -1.0
print(result[1] - 1.0 < 0.0001)     # Should be close to 1.0
print(result[2] - 0.0 < 0.0001)     # Should be close to 0.0