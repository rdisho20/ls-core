'''
P-
input: search results including chapter 'contents'
output: dictionary with index numbers for each paragraph

A-
split each paragraph by '\n\n'
Then for each paragraph, build a dictionary
    key in dict is 'id', and value is '...paragraph text...'

----
once I have the index numbers for each paragraph...
key in dict is 'id', and value is '...paragraph text...'

When I have the 'results.content' dictionary, using the id
I can create links in the page

----
So we are getting initial search results

contents = {}
FOR every search result
    build upon a dictionary at key 'contents'
    contents['id'] = paragraph
'''

'''HELPER VIEW -> RESULTING PARAGRAPHS & QUERY
input: text
output: updated text w/ query(s) wrapped in '<strong></strong>'

rules:
case insensitive, but return result as case sensitive

D-
check letter by letter, string as is

A-
Start w/ 'result' = ''
set 'count' = 0
for every character in the paragraph
    starting w/ 'character' check a range of the length of 'query'
    IF the current char_str == query
        wrap it in <strong></strong> tags
        append the wrapped 'char_str' to 'result'
        set 'count' equal to length of 'query'
    OTHERWISE
        check IF 'count' == 0
            append the 'character' to 'result'
        otherwise
            decrement 'count' by 1

return 'result'
'''