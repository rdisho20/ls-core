class SmartList:
    def __init__(self, lst):
        self.lst = lst

    def filter_by_type(self, type):
        return [item for item in self.lst if isinstance(item, type)]

    def transform(self, lst):
        self.lst = lst
        return self.lst

    def __iter__(self):
        return iter(self.lst)

# Regular list usage

regular_list = [1, "hello", 3.14, True]
#for item in regular_list:
    #print(item)

# SmartList should work the same way
smart_list = SmartList([1, "hello", 3.14, True])
for item in smart_list:
    print(item)


# But SmartList has additional functionality
integers_only = smart_list.filter_by_type(int)
doubled_values = smart_list.transform(lambda x: x * 2 if isinstance(x, (int, float)) else x)

print(integers_only)
print(doubled_values)

# Function that works with any list-like object (duck typing)
def process_items(collection):
    result = []
    for item in collection:
        result.append(str(item).upper() if isinstance(item, str) else item)
    return result

# Should work with both types
print(process_items(regular_list))
print(process_items(smart_list))