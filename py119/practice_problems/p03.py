def to_weird_case(string):
    word_lst = string.split()

    for word_idx in range(2, len(word_lst), 3):
        word = word_lst[word_idx]
        char_lst = list(word)

        for char_idx in range(1, len(char_lst), 2):
            char_lst[char_idx] = char_lst[char_idx].upper()

        updated_word = ''.join(char_lst)
        word_lst[word_idx] = word.replace(word, updated_word)

    return ' '.join(word_lst)


original = 'Lorem Ipsum is simply dummy text of the printing world'
expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world'
print(to_weird_case(original) == expected)

original = 'It is a long established fact that a reader will be distracted'
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
print(to_weird_case(original) == expected)

print(to_weird_case('aaA bB c') == 'aaA bB c')

original = "Mary Poppins' favorite word is supercalifragilisticexpialidocious"
expected = "Mary Poppins' fAvOrItE word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
print(to_weird_case(original) == expected)