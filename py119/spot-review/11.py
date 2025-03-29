def domain_name(url):
    if 'www.' in url:
        start = url.find('www.') + 4 # adding 3 index positions to get correct start
        end = url.find('.com')
    else:
        start = url.find('/') + 2
        end = url.find('.com')
    
    return url[start:end]


print(domain_name("http://github.com/carbonfive/raygun")) # should return "github"
print(domain_name("https://www.cnet.com")) # should return "cnet"