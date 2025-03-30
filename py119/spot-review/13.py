def kebabize(string):
    result_lst = []
    result_word = ''

    for idx, char in enumerate(string):
        if char.isupper() and len(result_word) > 0:
            result_lst.append(result_word.casefold())
            result_word = ''
            result_word += char
        
        elif len(string) == (idx + 1):
            result_word += char
            result_lst.append(result_word.casefold())


        elif char.isupper():
            result_word += char

        elif not char.isalpha():
            continue

        else:
            result_word += char
    
    return '-'.join(result_lst)


print(kebabize('camelsHaveThreeHumps')) # should return 'camels-have-three-humps'
print(kebabize('myCamelHas3Humps')) # should return 'my-camel-has-humps'
