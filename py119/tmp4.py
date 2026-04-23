"""
Write a program that determines the longest sentence in a text. A sentence can end with a period (.), exclamation point (!), or question mark (?). Sentences always begin with a word character. You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Log the longest sentence and its word count to the console.

input: string (text)
output: longest sentance & its word count, logged to console

rules:
explicit:
- sentence can end w/ .!?
- sentences always begin w/ alpha character (.isalpha())
- a word is a sequence of characters that are not spaces or sentence-ending characters

implicit:
- a word can end w/ a ','
- keep punctuation intact for result sentance

d:
list of strings that are sentences
- iterating over each character in the input string
- at any point, we reach a ' ' or ',', we have a word
- at any point we reach a '?' '.' '!', we have a sentence

a:
given an input string
start with a sentences_list
start with an current_string equal empty string

for each character in the input string
    if my current_string is empty and my character is not alphabetical
        continue

    concat the character to my sentance string

    if it is .?!, a sentance is built
        split the sentence into list of words using ' ' as delimiter
        set count to 0

        for each word in sentence
            if its first character is alphabetical, increment a count ('--')

        append sentance to sentences_list with its word count
        reset my current_sentence to an empty string

sort my sentences_list by word count (sort_by_word_count) descending (reverse=True)
print the first element index 0 (sentance), index 1 (count)

HELPER function: sort_by_word_count(element)
    returns element[1] (count)

Four score and seven years ago our fathers brought forth
    on this continent a new nation, conceived in liberty, and
    dedicated to the proposition that all men are created
    equal.

    Now we are engaged in a great civil war, testing whether
    that nation, or any nation so conceived and so dedicated,
    can long endure. We are met on a great battle-field of
    that war.
    We have come to dedicate a portion of that
    field, as a final resting place for those who here gave
    their lives that that nation might live! It is altogether
    fitting and proper that we should do this.

    But, in a larger sense, we can not dedicate, we can not
    consecrate, we can not hallow this ground. The brave
    men, living and dead, who struggled here, have
    consecrated it, far above our poor power to add or
    detract? The world will little note, nor long remember
    what we say here, but it can never forget what they
    did here? It is for us the living, rather, to be dedicated
    here to the unfinished work which they who fought
    here have thus far so nobly advanced. It is rather for
    us to be here dedicated to the great task remaining
    before us -- that from these honored dead we take
    increased devotion to that cause for which they gave
    the last full measure of devotion -- that we here highly
    resolve that these dead shall not have died in vain
    -- that this nation, under God, shall have a new birth
    of freedom -- and that government of the people, by
    the people, for the people, shall not perish from the
    earth.
"""
