'''
NOUNS:
Robot
Factory Floor
Random Number

VERBS:
Boot up
Generate (random number)
Reset (robot -> factory settings)

P-
input: none
output: string; robot's name

E-rules
Names must be random
Cannot use same name twice

D-
generate random sequence, check if in SET of previously generated numbers
IF it is, generate a new number, check again
as long as the newly generated number is not in the SET of previously generated numbers
that generated number is valid for robot

A-
Once robot is created, a new random number can be generated

When generated as long as it is not in 'names_set' it can be
    added as the robot's 'name'
    WHILE the name is in the 'names_set', must generate new one until unique

'''

import random

class Robot:
    generated_names = set()

    def __init__(self):
        self.name = self.generate_name()

    def generate_name(self):
        while True:
            first = [chr(random.choice(range(65, 92)))
                     for _ in range(0, 2)]
            second = str(random.randint(100, 999))
            
            name = ''.join(first) + second

            if name not in Robot.generated_names:
                Robot.generated_names.add(name)
                return name

    def reset(self):
        self.free_up_name()
        self.name = self.generate_name()
    
    def free_up_name(self):
        Robot.generated_names.remove(self.name)

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, new_name):
        self._name = new_name

robot = Robot()
print(robot.name)