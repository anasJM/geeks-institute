# Exercises 1:

# 3 <= 3 < 9 ------> true

# 3 == 3 == 3 -------> true

# bool(0) --------> false

# bool(5 == "5") -------> false

# bool(4 == 4) == bool("4" == "4") ---------> true

# bool(bool(None)) ---------> false

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
# x = true
print("y is", y)
# y = false
print("a:", a)
# a = 5
print("b:", b)
# b = 10

# Exercice 2:
word = ""
while word != "exit":
    word = input("Enter a long word without the letter 'A': ")
    if word == "exit":
        break
    if ('A' not in word) and ('a' not in word):
        print(f"Congratulations! there is no 'A' in: {word}")
    else:
        print(f"Failed!")

# Exercise 3:
paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(f"This paragraph contains {len(paragraph)} characters!")
print(f"This paragraph contains {len(paragraph.split("."))} sentences!")
print(f"This paragraph contains {len(paragraph.split(" "))} words!")
print(f"This paragraph contains {len(set(paragraph))} unique characters!")