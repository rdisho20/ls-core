def song_decoder(string):
    wubbed_string_list = string.split("WUB")
    wubbed_result = []

    for word in wubbed_string_list:
        if not word:
            continue
        else:
            wubbed_result.append(word)

    return ' '.join(wubbed_result)


print(song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))