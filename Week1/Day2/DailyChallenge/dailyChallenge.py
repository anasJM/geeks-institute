# Challenge 1:
number = input("Enter a number: ")
length = input("Enter a length: ")

result = []
i = 1
while i <= int(length):
    result.append(int(number) * i)
    i += 1

print(f'number: {number} - length {length} ---> {result}')

#Challenge 2:
word = input("Enter a word: ")
wordList = list(word)
result = []

for letter in wordList:
    if letter not in result:
        result.append(letter)
    elif letter != result[len(result) - 1]:
        result.append(letter)

print(f"user's word : '{word}' --> '{"".join(result)}'")