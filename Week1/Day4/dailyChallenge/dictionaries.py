
word = input("Enter a word: ")

result = {}

for key, value in enumerate(word):
    if value in result:
        result[f"{value}"].append(key)
    else:
        result[f"{value}"] = [key]

print(result)