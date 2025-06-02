class DataList:
    def __init__(self, lst):
        self.list = lst

    def add_item(self, item):
        self.list.append(item)
    
    def contains(self, item):
        for element in self.list:
            if element == item:
                return True
        return False
    
    def size(self):
        return len(self.list)
    
    def process(self):
        print("Processing DataList")

class DataDict:
    def __init__(self, dictionary):
        self.dictionary = dictionary
    
    def add_item(self, item):
        self.dictionary.update({item: str(item)})
    
    def contains(self, item):
        for key in self.dictionary.keys():
            if item == key:
                return True
        return False
    
    def size(self):
        return len(list(self.dictionary.items()))
    
    def process(self):
        print("Processing DataDict")

class DataSet:
    def __init__(self, st):
        self.set = st
    
    def add_item(self, item):
        self.set.add(item)
    
    def contains(self, item):
        for element in self.set:
            if element == item:
                return True
        return False
    
    def size(self):
        return len(self.set)
    
    def process(self):
        print("Processing DataSet")

containers = [DataList([1, 2, 3]), DataDict({1: "one", 2: "two"}), DataSet({3, 4, 5})]
for container in containers:
    container.add_item(10)
    print(f"Contains 2: {container.contains(2)}, Size: {container.size()}")
    container.process()