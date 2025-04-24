# Given a string, create a dictionary that counts the frequency of
# each character. Then return the character that appears most frequently.

def most_frequent(num):
    return num[1]


def most_frequent_char(string):
    counts = {}

    for char in string:
        counts[char] = counts.get(char, 0) + 1
    
    counts_lst = list(counts.items())
    max_item = max(counts_lst, key=most_frequent)

    return max_item[0]

print(most_frequent_char("programming"))
print(most_frequent_char("hello world"))