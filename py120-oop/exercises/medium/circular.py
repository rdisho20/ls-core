class CircularBuffer:
    def __init__(self, buffer_size):
        self._buffer_size = buffer_size
        self.buffer = []
    
    @property
    def buffer_size(self):
        return self._buffer_size
    
    def put(self, num):
        if len(self.buffer) < self._buffer_size:
            self.buffer.insert(0, num)
        else:
            self.buffer.insert(0, num)
            self.buffer.pop(-1)
    
    def get(self):
        return self.buffer.pop(-1) if self.buffer else None

buffer = CircularBuffer(3)

print(buffer.get() is None)          # True

buffer.put(1)
buffer.put(2)
print(buffer.get() == 1)             # True

buffer.put(3)
buffer.put(4)
print(buffer.get() == 2)             # True

buffer.put(5)
buffer.put(6)
buffer.put(7)
print(buffer.get() == 5)             # True
print(buffer.get() == 6)             # True
print(buffer.get() == 7)             # True
print(buffer.get() is None)          # True

buffer2 = CircularBuffer(4)

print(buffer2.get() is None)         # True

buffer2.put(1)
buffer2.put(2)
print(buffer2.get() == 1)            # True

buffer2.put(3)
buffer2.put(4)
print(buffer2.get() == 2)            # True

buffer2.put(5)
buffer2.put(6)
buffer2.put(7)
print(buffer2.get() == 4)            # True
print(buffer2.get() == 5)            # True
print(buffer2.get() == 6)            # True
print(buffer2.get() == 7)            # True
print(buffer2.get() is None)         # True

'''
put: puts one in
get: pulls the oldest out
'''