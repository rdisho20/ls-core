# Write a function that takes a number and returns it in expanded form.

def expanded_form(number):
    num_list = list(str(number))
    result = ''

    for idx, num in enumerate(num_list):
        if num == '0':
            continue

        if idx == len(num_list) - 1:
            result += num
            break

        zero_substring = '0' * ((len(num_list) - idx) - 1)
        result += num + zero_substring + ' + '
    
    return result


print(expanded_form(12) == '10 + 2')
print(expanded_form(42) == '40 + 2')
print(expanded_form(70304) == '70000 + 300 + 4')


'''
input: number
output: string
rules:
- imp:
-- expanded form is where take a number, and expand it with zeros based on its digit place

data structure: list

Algo:
Hgh lvl:
- Given a number, for every digit expand it by addings 0s
- minus 1 the length of the number
- concatinate it to 'expanded_string' like so... '[number] +'
-- UNLESS it is last idx in string then concatinate '[number]'

# 1st breakdown
'12' - 
1 at idx 0 where length is 2... add ONE zero '10 +'
2 at idx 1 where length is 2... add 0 zeros '2'


Low lvl:
START w/
- number converted to a string, and converted to a list => list(str(number))
-- assigned to 'num_list'
-- empty string 'result'

Step 1:
- Given a number, FOR every 'idx' and 'num' in enumerated 'num_list'
-- IF 'num' == 0, CONTINUE to next iteration

-- IF last 'idx' in iteration, idx == len(num_list) - 1
--- then concatinate 'num' to 'result' string and BREAK

-- set 'zero_substring' reference to '0' * (len(num_list) - idx) - 1)
-- OTHERWISE concat 'num' + 'zero_substring' + ' + ' to 'result'

Step 2:
- finally return 'result'


# 2nd breakdown, testing for clarity
'70304' -
7 @ idx 0 where len is 5... add 4 zeros '70000 +'
0 @ idx 1 where len is 5... CONTINUE
3 @ idx 2 where len is 5... add 2 zeros '300 + ' => '70000 + 300 +'
0 ...
4 @ idx 4 where len is 5... zero 0s '4' => '70000 + 300 + 4'

'''